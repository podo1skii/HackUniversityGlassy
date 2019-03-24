import React from 'react';
import {Panel} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css';
import './Connect.css';
import socketIOClient from "socket.io-client";



// const io = require('socket.io')();

class ConnectPeople extends React.Component{
    constructor (props) {
		super(props);
		this.state = {
            // id: this.props.fetchedUser.id,
            activeTab: this.props.activeTab

		};
	}

    // var socket = socketIOClient('http://80.78.255.120:8000/');
    // document.getElementById('connect-round').addEventListener('click', function (){
    // socket = socketIOClient('http://80.78.255.120:8000/');
    // socket.emit('eventServer', {id: this.state.id, time: (new Date()).valueOf()});
    //
    // socket.on('eventClient', function (data) {
    // console.log('client');
    // console.log(data);
    // socket.disconnect();
    // socket.on('disconnect', function () {
    // console.log('user disconnected');
    // });
    // });
    // });

    render(){

        return (
            <Panel id='connect'>
            {this.state.activeTab === 'connect' &&
                <img src='https://img.icons8.com/nolan/512/000000/mts.png' id='connect-round'/>
            }
            </Panel>


        )
    }
}

export default ConnectPeople;
