import React, {Component} from 'react';
import logo_blank from '../media/logo_blank.png';
import logo_text from '../media/logo_text.png';
import '../Styles/Logo.css'
import '../scripts/hover.js';
import Link from 'react-router-dom/Link';

export default class extends Component {
  render(){
    return (
      <Link to="home">
      <div id="wrapper">
          <div className="logo"></div>
          <div className="logo_wrapper_big"></div>
          <div className="day_wrapper">
            <div className="day"><h2>DAY</h2></div>
          </div>
          <div className="or_wrapper">
            <div className="or"><h2>OR</h2></div>
          </div>
          <div className="night_wrapper">
           <div className="night"><h2>NIGHT</h2></div>
          </div>
          <div className="en_wrapper active">
            <div className="en"><p>en</p></div>
          </div>
          <div className="ru_wrapper">
            <div className="ru"><p style={{color: 'rgb(136,136,136)'}}>ru</p></div>
          </div>
          <div className="slider">
            <div className="slider_ball_wrapper">
              <div className="slider_ball"></div>
            </div>
          </div>
          <div className="logo_blank" style={{backgroundImage: `url(${logo_blank})`}}>
          <div className="logo_text" style={{backgroundImage: `url(${logo_text})`}}></div>
        </div>
        </div>
        </Link>
    )
  }
}