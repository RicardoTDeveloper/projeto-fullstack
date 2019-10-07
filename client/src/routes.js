import React from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import New from './pages/New';

export default function Routes() {

    return (
        <HashRouter>
        <Switch> 
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/new" component={New} />
        </Switch>
        </HashRouter>
    )

}