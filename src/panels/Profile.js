import React from 'react';
import { View, Panel, PanelHeader, Group, List,HorizontalScroll, Cell, Avatar} from '@vkontakte/vkui';
import {getAgeByBDate, getDescriptionAge, transformTextStatus, colorTextStatus, getUserLevel} from '../functions.js'

import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon12Fire from '@vkontakte/icons/dist/12/fire';


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
        const itemStyle = {
            flexShrink: 0,
            width: 80,
            height: 80,
            display: 'flex',
            flexDirection:
            'column',
            alignItems: 'center',
            fontSize: 12
          };
        return (
            <View id="profile" activePanel={this.state.activePanel}>
                <Panel id="profile">
                    <PanelHeader>Профиль</PanelHeader>
                    {this.props.fetchedUser &&
                    <React.Fragment>
                        <Group>
                            <Cell
                                before={this.props.fetchedUser.photo_200 ? <Avatar size={60} src={this.props.fetchedUser.photo_200}/> : null}
                                size='l'
                                description={getDescriptionAge(getAgeByBDate(this.props.fetchedUser.bdate)) +', '+(this.props.fetchedUser.city && this.props.fetchedUser.city.title ? this.props.fetchedUser.city.title : '')}
                                bottomContent={<div style={{ display: 'flex' }}><Icon12Fire style={{color: colorTextStatus(30)}}/><div style={{lineHeight:'14px',fontSize:'14px', color: colorTextStatus(30),paddingLeft: '6px'}}>{transformTextStatus(1,'Паренек')} {getUserLevel(1)}</div></div>}
                            >
                                {`${this.props.fetchedUser.first_name} ${this.props.fetchedUser.last_name}`}
                            </Cell>
                        </Group>
                        <Group>
                            <List>
                                <Cell
                                    before={<Icon24Place />}
                                >
                                    {this.state.city}
                                </Cell>
                            </List>
                        </Group>
                        <Group title="Достижения">
                            <List>
                            <HorizontalScroll>
                              <div style={{ display: 'flex' }}>
                                <div style={{ ...itemStyle, paddingLeft: 4 }}>
                                  <img src='https://image.flaticon.com/icons/svg/1601/1601634.svg' alt='archieve' style={{height: '64px',width: '64px'}}/>
                                </div>
                                <div style={itemStyle}>
                                  <img src='https://image.flaticon.com/icons/svg/1490/1490546.svg' alt='archieve' style={{height: '64px',width: '64px'}}/>
                                </div>
                                <div style={itemStyle}>
                                  <img src='https://image.flaticon.com/icons/svg/1490/1490542.svg' alt='archieve' style={{height: '64px',width: '64px'}}/>
                                </div>

                              </div>
                            </HorizontalScroll>
                            </List>
                        </Group>
                    </React.Fragment>}
                </Panel>
            </View>
        );
    }
}



export default Profile;
