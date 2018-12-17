import React, {Component} from 'react';
import Logo from '../Logo';
import StartProject from '../StartProject';
import Socials from '../Socials';
import '../../Styles/StartProject.css';

export default class extends Component {
  render(){
    return(
      <div>
      <Logo/>
      <StartProject/>
      <Socials/>
      </div>
    )
  }
}