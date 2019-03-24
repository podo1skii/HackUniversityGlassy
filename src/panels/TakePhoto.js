import React from 'react';
import PropTypes from 'prop-types';
import {getAgeByBDate, getDescriptionAge, transformTextStatus, colorTextStatus} from '../functions.js'

import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Place from '@vkontakte/icons/dist/24/place';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Flash from '@vkontakte/icons/dist/24/flash';
import Icon24Message from '@vkontakte/icons/dist/24/message';
import Icon24User from '@vkontakte/icons/dist/24/user';
import Icon12Fire from '@vkontakte/icons/dist/12/fire';



class TakePhoto extends React.Component {
    constructor (props) {
		super(props);
		this.state = {
            activePanel: 'profile',
            city: 'Санкт-Петербург',
            value:'',
            gameCount: '',
            team: ''
		};
        this.onChangePanel = this.onChangePanel.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
	}

    onChangePanel(e) {
        this.setState({ activePanel: e.currentTarget.dataset.panel });
    }

	componentDidMount() {
	}


    handleChange(event) {
        this.setState({value: event.target.value});
      }

      handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
    render(){
        return (
            <React.Fragment>
                    <form onSubmit={this.handleSubmit} >
                          <input
                             type="text"

                            value={this.state.value} onChange={this.handleChange}
                            />
                    </form>

                    <input type="submit" value="Загрузить123"/>
                </React.Fragment>
            )}
}
export default TakePhoto;
