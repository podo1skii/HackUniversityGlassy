import React from 'react';
import ReactDOM from 'react-dom';
import { View, Panel, PanelHeader, HeaderButton,FormStatus,FormLayoutGroup,FormLayout,Input, Group, List, Cell, Avatar, platform, IOS, Button} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Emotions from './Emotions'
import './Emotions.css'
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon24BrowserBack from '@vkontakte/icons/dist/24/browser_back';
import {serverResponse,getUserEvent,getByOrderId,getUserEvents} from '../requests'

const osname = platform();

class Events  extends React.Component{
    constructor (props) {
		super(props);
		this.state = {
            order_id:'',
            number_str:'',
            activePanel: 'events',
            popout: null
		};
        this.onChangePanel = this.onChangePanel.bind(this);
	}

    onChangePanel(e) {
        this.setState({ activePanel: e.currentTarget.dataset.panel });
    }

    onCheckEvent(e) {
        if (serverResponse(getByOrderId(this.props.fetchedUser.id,this.state.order_id,this.state.number_str)) !== 'Good job'){
            let statusBlock = (
                        <FormStatus title="Ошибка" state="error">
                            Такого билета не существует
                        </FormStatus>
                    );
            ReactDOM.render(statusBlock, document.getElementById("statusForm"));
        }
    }






    render() {
        return (
            <View id="events" activePanel={this.state.activePanel}>
                <Panel id="events">
                    <PanelHeader left={<HeaderButton
                              onClick={() => this.setState({ activePanel: 'create' })}
                        >
                            {osname === IOS ? <Icon24Add/> : <Icon24Add/>}
                        </HeaderButton>}
                        >Мои события</PanelHeader>

                    <React.Fragment>

                        <Group>
                            <List>
                            <Cell
                              before={<Avatar size={64} />}
                              size="l"
                              description={<div>Концерт, Альпенхаус</div>}
                              onClick={() => this.setState({ activePanel: 'eventinfo' })}
                              asideContent={<div style={{fontSize:'14px'}}><div>19 мая</div><div>20:00</div></div>}
                            ><div><div>Guthrie Govan</div><div style={{ color: '#9ea1a5',fontWeight:'500', fontSize: '14px'}}>Gone Fludd</div></div>
                              </Cell>
                            </List>
                        </Group>
                        <Group>
                            <List>
                            <Cell
                              before={<Avatar size={64} />}
                              size="l"
                              description={<div>Концерт, ZAL</div>}
                              onClick={() => this.setState({ activePanel: 'eventinfo' })}
                              asideContent={<div style={{fontSize:'14px'}}><div>28 марта</div><div>20:00</div></div>}
                            ><div><div>Tommy Cash</div><div style={{ color: '#9ea1a5',fontWeight:'500', fontSize: '14px'}}>Gone Fludd</div></div>
                              </Cell>
                            </List>
                        </Group>
                        <Group>
                            <List>
                            <Cell
                              before={<Avatar size={64} />}
                              size="l"
                              description={<div>Концерт, Клуб Морзе</div>}
                              onClick={() => this.setState({ activePanel: 'eventinfo' })}
                              asideContent={<div style={{fontSize:'14px'}}><div>30 августа</div><div>20:00</div></div>}
                            ><div><div>Маятник Фуко</div><div style={{ color: '#9ea1a5',fontWeight:'500', fontSize: '14px'}}>Gone Fludd</div></div>
                              </Cell>
                            </List>
                        </Group>
                        <Group>
                            <List>
                            <Cell
                              before={<Avatar size={64} />}
                              size="l"
                              description={<div>Концерт, Сибур арена</div>}
                              onClick={() => this.setState({ activePanel: 'eventinfo' })}
                              asideContent={<div style={{fontSize:'14px'}}><div>5 апреля</div><div>20:00</div></div>}
                            ><div><div>Маятник Фуко</div><div style={{ color: '#9ea1a5',fontWeight:'500', fontSize: '14px'}}>Gone Fludd</div></div>
                              </Cell>
                            </List>
                        </Group>
                        <Group>
                            <List>
                            <Cell
                              before={<Avatar size={64} />}
                              size="l"
                              description={<div>Концерт, Ледовый Дворец</div>}
                              onClick={() => this.setState({ activePanel: 'eventinfo' })}
                              asideContent={<div style={{fontSize:'14px'}}><div>11 июня</div><div>20:00</div></div>}
                            ><div><div>KISS</div><div style={{ color: '#9ea1a5',fontWeight:'500', fontSize: '14px'}}>Gone Fludd</div></div>
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
                <Panel id='create'>
                    <PanelHeader left={
							<HeaderButton
								key="filter"
								onClick={() => this.setState({ activePanel: 'events' })}
							>
								<Icon24BrowserBack />
							</HeaderButton>}>Эмоции</PanelHeader>
                        <FormLayout>
                            <FormLayoutGroup>
                                <div id="statusForm"></div>
                                <Input type="number" defaultValue="Номер заказа"onChange={(e) => {this.setState({ order_id: e.target.value })}} />
                                <Input type="text" defaultValue="Номер бланка" onChange={(e) => {this.setState({ number_str: e.target.value })}}/>
                            </FormLayoutGroup>
                            <Button size="xl"
                                    level="primary"
                                    onClick={this.onCheckEvent}>Проверить наличие билета</Button>
                        </FormLayout>
                </Panel>
            </View>
        );
    }
}

export default Events;
