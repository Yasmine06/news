import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import zero from './zero';
import one from './one';
import two from './two';
import three from './three';
import four from './four';
import five from './five';
import six from './six';
import App from './App';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

import './style.css';
import logo from './images/stock coffee.jpg'


const routing = (
  <Router>
      <div>

      <div class="navbar">
  <a href="#about">About</a>
  <a href="#news">News</a>
  <div class="dropdown">
    <button class="dropbtn">Filter
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
    <Link to="/four">  <a href="#">General</a></Link>
    <Link to="/five"> <a href="#">Technology</a></Link>
    <Link to="/six"> <a href="#">Entertainment</a></Link>
    </div>
  </div> 
</div>
<span class="title"><h1>Tmaun News</h1></span>
         <span class="sub-title">Good News add taste to your coffee</span>
<img src={logo} alt="Logo" style={{width:'100vw'}}/>
<div id="news">
        <ul>  
          <li>
            <Link to="/zero"><button class='btn' ><b> ABC News</b><img class="ricon"src="https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/55/79/19/55791923-b557-b629-637d-a4d8dde589a7/AppIcon-0-1x_U007emarketing-0-0-GLES2_U002c0-512MB-sRGB-0-0-0-85-220-0-0-0-6.png/320x0w.jpg"/></button></Link>
          </li>
          <li>
            <Link to="/one"> <button class='btn'><b>Business Insider</b><img class="ricon"src="https://static2.businessinsider.com/image/596e4e7a552be51d008b50fd/business-insider.jpg"/></button></Link>
          </li>
          <li>
            <Link to="/two"> <button class='btn'><b>BBC Sport</b><img class="ricon"src="https://images-eu.ssl-images-amazon.com/images/I/41UnQfmV-LL.png"/></button></Link>
          </li>
          <li>
            <Link to="/three"><button class='btn'><b>News24</b><img class="ricon"src="https://cdn6.aptoide.com/imgs/7/1/4/7149c93b0ae9a753393507ab73599162_icon.png?w=240"/></button></Link>
              </li>
        </ul>
        </div>
        </div>
        <Route exact path="/" component={App} />
        
        <Route path="/zero" component={zero} />
        <Route path="/one" component={one} />
        <Route path="/two" component={two} />
        <Route path="/three" component={three} />
        <Route path="/four" component={four} />
        <Route path="/five" component={five} />
        <Route path="/six" component={six} />
        <div id="about">
        <h1>ABOUT</h1>
        <p>Tmaun is a personalised news searcher that helps one find crisp news regarding all affairs. </p>
      </div>
      
      
    </Router>
  )

  ReactDOM.render(routing, document.getElementById('root'))


registerServiceWorker();

if (module.hot) {
    module.hot.accept()
};