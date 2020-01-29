import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './components/App';
import './index.css'
import { Router, Switch, Route } from 'react-router-dom';
import Jokes from './components/Jokes';
import createBrowserHistory from 'history/createBrowserHistory';
import Header from './components/Header';
import MusicMaster from './projects/music-master'

ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path='/' render={() => <Header><App1 /></Header>} />
            <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
            <Route path='/music-master' render={() => <Header><MusicMaster /></Header>} />
        </Switch>
    </Router>
    , document.getElementById('root'));