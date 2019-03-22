import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { Epic, Tabbar, TabbarItem } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Icon28User from '@vkontakte/icons/dist/28/user';
import Icon28Place from '@vkontakte/icons/dist/28/place';
import Icon28Favorite from '@vkontakte/icons/dist/28/favorite';


import Profile from './panels/Profile';

class App extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			activeStory: 'events',
			fetchedUser: null
		};
		this.onStoryChange = this.onStoryChange.bind(this);
	}

	onStoryChange (e) {
		this.setState({ activeStory: e.currentTarget.dataset.story })
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					// console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});

		connect.subscribe((e) => {
			console.log(e.detail);
			switch (e.detail.type) {
				case 'VKWebAppGeodataResult':
					this.setState({ locationUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetGeodata', {});
	}

	render() {
		return (
			<Epic activeStory={this.state.activeStory} tabbar={
				<Tabbar>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'events'}
						data-story="events"
					><Icon28Favorite /></TabbarItem>
					<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'map'}
						data-story="map"
					><Icon28Place /></TabbarItem>
				  	<TabbarItem
						onClick={this.onStoryChange}
						selected={this.state.activeStory === 'profile'}
						data-story="profile"
				  	><Icon28User /></TabbarItem>
				</Tabbar>
				}>
				<Profile id="profile" fetchedUser={this.state.fetchedUser} />
			</Epic>
		);
	}
}

export default App;
