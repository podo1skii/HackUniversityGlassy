import React from 'react';
import { View, Panel, PanelHeader, HeaderButton,FormStatus,FormLayoutGroup,FormLayout,Input, Group, List, Cell, Avatar, platform, IOS, Button} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';



class Marker extends React.Component{
    constructor (props) {
		super(props);
		this.state = {
            id: this.props.fetchedUser.Id,
            activeTab: this.props.activeTab
		};
	}



    render(){

        return (
            <Panel id='shop'>
            <Group>
                <Cell
                  before={<Avatar size={64} />}
                  size="l"
                  description={<div>Описание</div>}
                  asideContent={<div style={{fontSize:'14px'}}><div>250р</div>}
                ><div>Название</div>
                  </Cell>
            </Group>
            <Group>
                  <Cell
                    before={<Avatar size={64} />}
                    size="l"
                    description={<div>Описание</div>}
                    asideContent={<div style={{fontSize:'14px'}}><div>250р</div>}
                  ><div>Название</div>
                    </Cell>
            </Group>
            <Group>
                  <Cell
                    before={<Avatar size={64} />}
                    size="l"
                    description={<div>Описание</div>}
                    asideContent={<div style={{fontSize:'14px'}}><div>250р</div>}
                  ><div>Название</div>
                    </Cell>
            </Group>
            <Group>
                  <Cell
                    before={<Avatar size={64} />}
                    size="l"
                    description={<div>Описание</div>}
                    asideContent={<div style={{fontSize:'14px'}}><div>250р</div>}
                  ><div>Название</div>
                    </Cell>
            </Group>
            </Panel>

        )
    }


}
