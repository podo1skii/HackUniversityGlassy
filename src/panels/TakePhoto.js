import React from 'react';
import PropTypes from 'prop-types';
import { View, Panel, PanelHeader, HeaderButton,File, Group, List, ListItem,HorizontalScroll,FormLayout, Cell, Avatar, platform, IOS, Button, Div, Footer } from '@vkontakte/vkui';
import {getAgeByBDate, getDescriptionAge, transformTextStatus, colorTextStatus} from '../functions.js'

import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Flash from '@vkontakte/icons/dist/24/flash';
import Icon24Message from '@vkontakte/icons/dist/24/message';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon12Fire from '@vkontakte/icons/dist/12/fire';

const osname = platform();

class TakePhoto extends React.Component {
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

    _onChange = (e) => {

      const file    = this.refs.uploadImg.files[0]
      const reader  = new FileReader();

      reader.onloadend = () => {
          this.setState({
              imageUrl: reader.result
          })
      }
      if (file) {
          reader.readAsDataURL(file);
          this.setState({
              imageUrl :reader.result

          })
          // document.getElementById('loadImg').setAttribute('height','400px');
          document.getElementById('loadImg').setAttribute('width','100%');
          document.getElementById('loadImg').setAttribute('display','block');
      }
      else {
          this.setState({
              imageUrl: ""
          })
      }
    }
    render(){
        return (
            <View id="profile" activePanel={this.state.activePanel}>
                <Panel id="profile">
                    <PanelHeader>Фото</PanelHeader>
                    <form onSubmit={this.onSubmit} >
                          <input
                             ref="uploadImg"
                             type="file"
                             name="selectedFile"
                             onChange={this._onChange}
                            />
                    </form>

                    <img id='loadImg'src={this.state.imageUrl}/>


                </Panel>
            </View>
            )}
}
export default TakePhoto;
