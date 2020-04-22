import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css';
import Jokes from './Jokes';
import {Router,Switch,Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './Header';

ReactDom.render(
    <Router history = {createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={()=> <Header><App/></Header>}/>
            <Route path ='/jokes' render={()=><Header><Jokes/></Header>}></Route>

        </Switch>
    </Router>
    ,document.getElementById('root'));