import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View, Panel, PanelHeader, HeaderButton,Gallery, Group, List, ListItem, Cell, Avatar, platform, IOS, Button, Div, Footer } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';
import Emotions from './Emotions'
import './Emotions.css'
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const osname = platform();

class Events  extends React.Component{
    constructor (props) {
		super(props);
		this.state = {
            activePanel: 'events'
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
                              onClick={() => this.setState({ activePanel: 'eventinfo' })}
                              asideContent={<div style={{fontSize:'14px'}}><div>22 марта</div><div>18:00</div></div>}
                            ><div><div>Маятник Фуко</div><div style={{ color: '#9ea1a5',fontWeight:'500', fontSize: '14px'}}>Gone Fludd</div></div>
                              </Cell>
                            </List>
                        </Group>
                    </React.Fragment>
                </Panel>
                <Panel id='eventinfo'>
                <PanelHeader left={<HeaderButton
                          onClick={() => this.setState({ activePanel: 'events' })}
                    >
                        {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                    </HeaderButton>}>Эмоции</PanelHeader>

                <Emotions/>
                </Panel>
            </View>
        );
    }
}

export default Events;
