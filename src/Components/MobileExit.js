import React, {Component} from 'react';
import Exit from '../media/mobile_exit.png';

export default class extends Component {
  goBack(){
    if(!this.state.map){
    this.props.history.goBack();
    } else {
      document.getElementsByClassName('map_folded')[0].style.height = '40vh'
      this.setState({map: false})
    }
  }

    render(){
      return(
        <div className="mobile_exit">
          <img src={Exit}/>
        </div>
      )
    }
}