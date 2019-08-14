import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Header/Header';
import MainPage from './MainPage/MainPage';
import Posts from './Posts/Posts';
import Post from './Posts/Post/Post';
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
                        <Route path={'/categories'} component={ Categories } />
                        <Route path={'/posts/:id'} component={ Post } />
                    </Switch>
                </BrowserRouter>
        )
    }
}

export default App;
