import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View, Panel, PanelHeader, HeaderButton, Group, List, ListItem, Cell, Avatar, platform, IOS, Button, Div, Footer } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';


class Events  extends React.Component{
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

    render() {
        return (
            <View id="profile" activePanel={this.state.activePanel}>
                <Panel id="profile">
                    <PanelHeader>Мои события</PanelHeader>

                    <React.Fragment>
                        <Group>
                            <List>
                            <Cell
                              before={<Avatar size={72} />}
                              size="l"
                              description={<div>концерт</div>}
                              bottomContent={<div style={{ fontSize: "12px" }}>Балтийская ул 66</div>}
                              asideContent='23 марта'
                            ><div><div>Маятник Фуко</div><div>Gone Fludd</div></div>
                              </Cell>
                            </List>
                        </Group>
                        <Group>
                            <List>
                            <Cell
                              before={<Avatar size={72} />}
                              size="l"
                              description={<div>Концерт, Балтийская ул 66</div>}
                              asideContent={<div style={{fontSize:'14px'}}><div>22 марта</div><div>18:00</div></div>}
                            ><div><div>Маятник Фуко</div><div style={{ color: '#9ea1a5', fontSize: '16px'}}>Gone Fludd</div></div>
                              </Cell>
                            </List>
                        </Group>
                        <Group>
                            <List>
                            <Cell
                              before={<Avatar size={60} />}
                              size="l"
                              description={<div>Концерт, Балтийская ул 66</div>}
                              asideContent={<div style={{fontSize:'14px'}}><div>22 марта</div><div>18:00</div></div>}
                            ><div><div>Маятник Фуко</div><div style={{ color: '#9ea1a5',fontWeight:'500', fontSize: '14px'}}>Gone Fludd</div></div>
                              </Cell>
                            </List>
                        </Group>
                        <Group>
                            <List>
                            <Cell
                              before={<Avatar size={60} />}
                              size="l"
                              description={<div>Концерт, Балтийская ул 66</div>}
                              asideContent={<div style={{fontSize:'14px'}}><div>22 марта</div><div>18:00</div></div>}
                            ><div><div>Маятник Фуко</div><div style={{ color: '#9ea1a5',fontWeight:'500', fontSize: '16px'}}>Gone Fludd</div></div>
                              </Cell>
                            </List>
                        </Group>
                    </React.Fragment>
                </Panel>
            </View>
        );
    }
}

export default Events;
