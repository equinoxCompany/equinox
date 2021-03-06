import React, {Component} from 'react';
import '../Styles/Socials.css'

export default class extends Component {
  mouseEnterFb(){
    let link = document.getElementsByClassName('line');
    link[0].style.width = '185px';
  }

  mouseLeaveFb(){
    let link = document.getElementsByClassName('line');
    link[0].style.width = '100%';
  }

  mouseEnterTw(){
    let link = document.getElementsByClassName('line');
    link[0].style.width = '230px';
  }

  mouseLeaveTw(){
    let link = document.getElementsByClassName('line');
    link[0].style.width = '100%';
  }
  mouseEnterIn(){
    let link = document.getElementsByClassName('line');
    link[0].style.width = '270px';
  }

  mouseLeaveIn(){
    let link = document.getElementsByClassName('line');
    link[0].style.width = '100%';
  }
  render(){
    return(
      <div className="container">
        <div className="nav">
          <div className="link_wrapper fb" onMouseEnter={()=> this.mouseEnterFb()} onMouseLeave={()=>this.mouseLeaveFb()}
          >
            <a href="https://www.facebook.com/equinox.ua/">fb</a>
          </div>
          <div className="link_wrapper tw" onMouseEnter={()=> this.mouseEnterTw()} onMouseLeave={()=>this.mouseLeaveTw()}>
            <a href="https://t.me/equinox_blog">tg</a>
          </div>
          <div className="link_wrapper in" onMouseEnter={()=> this.mouseEnterIn()} onMouseLeave={()=>this.mouseLeaveIn()}>
            <a href="https://instagram.com/equinox.company?utm_source=ig_profile_share&igshid=1i8qc9w51qnhw">in</a>
          </div>
          <div className="wrapper_line">
            <div className="line"></div>
          </div>
        </div>
      </div>
    )
  }
}