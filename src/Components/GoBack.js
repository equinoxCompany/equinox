import React, {Component} from 'react';
import '../Styles/GoBack.css';
import Exit from '../media/exit.png';
import Link from 'react-router-dom/Link';

export default class extends Component {



    goBack(){
        console.log(this.props.history)
        // if(!this.state.map){
        // this.props.history.goBack();
        // }
      }

  render(){
    return (
            <div>
               <img src={Exit} onClick={()=>this.goBack()}  className="go_back"/>
            </div>
        )
    }
  }