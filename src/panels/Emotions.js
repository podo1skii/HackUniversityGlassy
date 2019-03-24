import React from 'react';
import '@vkontakte/vkui/dist/vkui.css';
import NameForm from './NameForm';


class Emotions extends React.Component{
    constructor (props) {
		super(props);
		this.state = {
            activePanel: 'events'
        }
        this.onChangePanel = this.onChangePanel.bind(this);
	}

    onChangePanel(e) {
        this.setState({ activePanel: e.currentTarget.dataset.panel });
    }



    render(){
        return (<React.Fragment>
            <NameForm/>

            <div className='grid-images'>
                <div className='box'>123</div>
                <div className='box'>123</div>
                <div className='box'>123</div>
                <div className='box'>123</div>
                <div className='box'>123</div>
                <div className='box'>123</div>
                <div className='box'>123</div>
                <div className='box'>123</div>
            </div>

        </React.Fragment>)
    }
}

export default Emotions;
