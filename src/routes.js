import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';

export default (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/main" component={Main}/>
    </Switch>
);