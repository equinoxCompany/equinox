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
<<<<<<< HEAD
=======
import Seo from './Components/Seo';
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
import Post from './Components/Post';
import Loader from './Components/Loader';
import Admin from './Components/Admin';
import Projects from './Components/Projects';
import Project from './Components/Project';
<<<<<<< HEAD
=======
import SeoService from './Components/Services/Seo';
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
import ServicesMenu from './Components/Services/ServicesMenu';
import SeoAdmin from './Components/AdminSeo';
import Map from './Components/Services/MapStrategy';
import LoginSeo from './Components/LoginSeo';
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
<<<<<<< HEAD
=======
      <Route path='/seo' component={Seo}/>
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
      <Route path='/seo-admin' component={LoginSeo}/>
      <Route path='/admin' component={Login}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/project' component={Project}/>
      <Route path='/services' component={ServicesMenu}/>
<<<<<<< HEAD
=======
      <Route path='/service' component={SeoService}/>
>>>>>>> 810585ec3033f2509e86fed8344eed731109470d
      <Route path='/map' component={Map}/>
      <Route path='/:post' component={Post}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
