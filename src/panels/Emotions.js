import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View, Panel, PanelHeader, HeaderButton,Gallery, Group, List, ListItem, Cell, Avatar, platform, IOS, Button, Div, Footer } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import Icon24MoreHorizontal from '@vkontakte/icons/dist/24/more_horizontal';


class Emotions extends React.Component{
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


    render(){
        return (<React.Fragment>
            <div class='grid-images'>
                <div class='box'>123</div>
                <div class='box'>123</div>
                <div class='box'>123</div>
                <div class='box'>123</div>
                <div class='box'>123</div>
                <div class='box'>123</div>
                <div class='box'>123</div>
                <div class='box'>123</div>
                <div class='box'>123</div>
                <div class='box'>123</div>
                <div class='box'>123</div>
                <div class='box'>123</div>
                <div class='box'>123</div>
                <div class='box'>123</div>
                <div class='box'>123</div>
                <div class='box'>123</div>
            </div>
        </React.Fragment>)
    }
}

export default Emotions;
