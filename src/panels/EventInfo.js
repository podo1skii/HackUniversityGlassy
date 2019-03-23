import React from 'react';
import { PanelHeader, Group, List, Cell, CellButton, IOS, Avatar, HeaderButton, platform, HorizontalScroll, InfoRow, Link, Header } from '@vkontakte/vkui';

import '../Style.css'
import { getGames, serverResponse,getGameProfile, takePartGame } from '../Functions/requestsDatabase';
import { inGameDate, dateTransform, dateReverse, dateDB, validityMatches, getColorValidity, priceForPerson } from '../Functions/processing';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24MoneyTransfer from '@vkontakte/icons/dist/24/money_transfer';
import Icon28InfoOutline from '@vkontakte/icons/dist/28/info_outline';

const osname = platform();


class EventInfo extends React.Component {
    constructor (props) {
		super(props);
		this.state = {

		};
    }

    componentWillMount() {
    }

    render() {
        return (
            <React.Fragment>
                <PanelHeader
                    left={<HeaderButton
                        onClick={() => {this.props.onUpdatePanel('events', null, null)}}
                    >
                        {osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
                    </HeaderButton>}
                >
                    Игра
                </PanelHeader>

                
            </React.Fragment>
        );
    }
}

export default EventInfo;
