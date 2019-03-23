import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View, Panel, PanelHeader, HeaderButton, Group, List, ListItem, Cell, Avatar, platform, IOS, Button, Div, Footer } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';


class EventInfo  extends React.Component{
    constructor (props) {
		super(props);
		this.state = {
            
		};
        this.onChangePanel = this.onChangePanel.bind(this);
	}

    onChangePanel(e) {
        this.setState({ activePanel: e.currentTarget.dataset.panel });
    }

    render() {
        return (
            <View id="events" activePanel={this.state.activePanel}>
                <Panel id="events">
                    <PanelHeader>Мои события</PanelHeader>

                    <React.Fragment>
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
                    </React.Fragment>
                </Panel>
            </View>
        );
    }
}

export default EventInfo;
