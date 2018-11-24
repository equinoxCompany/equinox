import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Main from './Components/Main';
import AboutUs from './Components/AboutUs';
import Login from './Components/Login';
import Contacts from './Components/Contacts';
import JoinCrew from './Components/JoinCrew';
import Blog from './Components/Blog';
import Seo from './Components/Seo';
import Post from './Components/Post';
import Loader from './Components/Loader';
import Admin from './Components/Admin';
import Projects from './Components/Projects';
import Project from './Components/Project';
import SeoService from './Components/Services/Seo';
import ServicesMenu from './Components/Services/ServicesMenu';
import Map from './Components/Services/MapStrategy';
import { HashRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
  <HashRouter>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/home' component={Main}/>
      <Route path='/about-us' component={AboutUs}/>
      <Route path='/contacts' component={Contacts}/>
      <Route path='/join-the-crew' component={JoinCrew}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/seo' component={Seo}/>
      <Route path='/post' component={Post}/>
      <Route path='/admin' component={Admin}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/project' component={Project}/>
      <Route path='/services' component={ServicesMenu}/>
      <Route path='/service' component={SeoService}/>
      <Route path='/map' component={Map}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
