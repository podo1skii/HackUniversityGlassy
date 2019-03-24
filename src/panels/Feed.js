import React from 'react';
import { View, Panel, PanelHeader, Tabs, TabsItem, platform, IOS } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import ConnectPeople from './Connect'

const osname = platform();

class Feed extends React.Component{
    constructor (props) {
		super(props);
		this.state = {
            fetchedUser: this.props.fetchedUser,
            activePanel: 'feed',
            activeTab: 'connect'
		};
	}

    onChangePanel(e) {
        this.setState({ activePanel: e.currentTarget.dataset.panel });
    }

    render() {
        return (
            <View id="feed" activePanel={this.state.activePanel}>
                <Panel id="feed">
                    <PanelHeader
                        noShadow

                    >
                        {osname === IOS ?
                            <Tabs theme="header" style={{ width: 200 }}>
                                <TabsItem
                                    onClick={() => this.setState({ activeTab: 'connect' })}
                                    selected={this.state.activeTab === 'connect'}
                                >
                                    Знакомства
                                </TabsItem>
                                <TabsItem
                                    onClick={() => this.setState({ activeTab: 'shop' })}
                                    selected={this.state.activeTab === 'shop'}
                                >
                                    Магазин
                                </TabsItem>
                            </Tabs> :
                            'Tabs'
                        }
                    </PanelHeader>
                    {this.state.activeTab === 'connect' &&
                        <ConnectPeople activeTab={this.state.activeTab} fetchedUser={this.props.fetchedUser}/>
                }

                </Panel>


                </View>
        );
    }
}

export default Feed;
