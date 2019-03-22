import React from 'react';
import PropTypes from 'prop-types';
import { View, Panel, PanelHeader, HeaderButton, Group, List, ListItem, Cell, Avatar, platform, IOS, Button, Div, Footer } from '@vkontakte/vkui';
import {getAgeByBDate, getDescriptionAge} from '../functions.js'

import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Flash from '@vkontakte/icons/dist/24/flash';
import Icon24Message from '@vkontakte/icons/dist/24/message';

const osname = platform();

class Profile extends React.Component {
    constructor (props) {
		super(props);
		this.state = {
            activePanel: 'profile',
            city: 'Санкт-Петербург',
            gameCount: '',
            team: ''
		};
        this.onChangePanel = this.onChangePanel.bind(this);
	}

    onChangePanel(e) {
        this.setState({ activePanel: e.currentTarget.dataset.panel });
    }

	componentDidMount() {
	}

    render() {
        return (
            <View id="profile" activePanel={this.state.activePanel}>
                <Panel id="profile">
                    <PanelHeader>Профиль</PanelHeader>
                    {this.props.fetchedUser &&
                    <React.Fragment>
                        <Group>
                            <ListItem
                                before={this.props.fetchedUser.photo_200 ? <Avatar src={this.props.fetchedUser.photo_200}/> : null}
                                description={getDescriptionAge(getAgeByBDate(this.props.fetchedUser.bdate)) +', '+(this.props.fetchedUser.city && this.props.fetchedUser.city.title ? this.props.fetchedUser.city.title : '')}
                            >
                                {`${this.props.fetchedUser.first_name} ${this.props.fetchedUser.last_name}`}
                            </ListItem>
                        </Group>
                        <Group>
                            <List>
                                <Cell
                                    data-panel="chooseСity"
                                    before={<Icon24Place />}
                                >
                                    {this.state.city}
                                </Cell>
                            </List>
                        </Group>
                        <Group title="Ранг">
                            <List>
                                <Cell
                                    before={<Icon24Flash />}
                                >
                                    {this.state.gameCount}
                                </Cell>
                            </List>
                        </Group>
                    </React.Fragment>}
                </Panel>
            </View>
        );
    }
}



export default Profile;
