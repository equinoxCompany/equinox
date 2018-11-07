import React, {Component} from 'react';
import video from '../animations/loader.mov'
import { Redirect, withRouter, Router } from 'react-router-dom';
import Main from '../Components/Main';

export default class extends Component {
  constructor (props) {
    super(props);
    this.state = {ended: false};

    this.videoEnded = this.videoEnded.bind(this);
  }

  videoEnded(){
    this.setState({ended: true});
  }

  render(){
    if(!this.state.ended){
    return(
      <div>
        <video className="video_container" playsInline loop={false} autoPlay={true} muted onEnded={this.videoEnded}>
          <source src={video} />
        </video>
      </div>
    )} else {
      return(
        <Main/>
      )
    }
  }
}