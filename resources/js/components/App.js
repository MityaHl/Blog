import React,  {Component}  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import Admin from './Admin/Admin';
import Public from './Public/Public'
class App extends Component{


    render() {
        return (
                <BrowserRouter>
                    <Switch>
                        <Route path={'/admin'} component={ Admin }/>
                        <Route path={'/'} component={ Public }/>
                    </Switch>
                </BrowserRouter>
        )
    }
}

export default App;
