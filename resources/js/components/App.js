import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import Posts from './Posts/Posts';
import FullPost from './Posts/FullPost';
import Profile from './Profile/Profile'
import Registration from './Auth/Registration'
import Authorization from './Auth/Authorization'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Categories from "./Categories/Categories";

class App extends Component{
    render() {
        return (
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route path={'/'} exact component={ MainPage } />
                        <Route path={'/posts'} component={ Posts } />
                        <Route path={'/auth'} component={ Authorization } />
                        <Route path={'/categories'} component={ Categories } />
                        <Route path={'/registration'} component={ Registration } />
                        <Route path={'/profile'} component={ Profile } />
                        <Route path={'/fullpost/:id'} component={ FullPost } />
                        <Route path={'/author/:id'} component={ Profile } />
                    </Switch>
                </BrowserRouter>
        )
    }
}

export default App;
