import React,  {PureComponent}  from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './Public/Header/Header';
import MainPage from './Public/MainPage/MainPage';
import Posts from './Public/Posts/Posts';
import FullPost from './Public/Posts/FullPost';
import Profile from './Public/Profile/Profile'
import Registration from './Public/Auth/Registration'
import Authorization from './Public/Auth/Authorization'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Categories from "./Public/Categories/Categories";
import AdminPosts from "./Admin/AdminPosts/AdminPosts";
import Admin from './Admin/Admin';

class App extends PureComponent{

    constructor(props) {
        super(props);
        this.state = {
            isAuth: '',
            auth: true,
            user: {}
        };
        this.onButtonClick = this.onButtonClick.bind(this);
        this.changeIsAuth = this.changeIsAuth.bind(this);
    }

    componentWillMount() {
        axios.get('/user/isAuth')
            .then(response => {
                this.setState({
                    isAuth : response.data
                });
            })
    }

    changeIsAuth () {
        this.setState({
            isAuth: !this.state.isAuth
        })
    }


    onButtonClick() {
            this.setState({
                auth: !this.state.auth
            })
    }

    render() {
        const func = this.onButtonClick;
        const funcIsAuth = this.changeIsAuth;
        console.log(this.state.isAuth);
        return (
                <BrowserRouter>
                    <Header
                        isAuth={this.state.isAuth}
                        auth={this.state.auth}
                        onButtonClick={
                            func
                        }
                        funcIsAuth = {
                            funcIsAuth
                        }/>
                    {
                        this.state.isAuth ? (
                            <Switch>
                                <Route path={'/'} exact render={() => <MainPage changeIsAuth={this.changeIsAuth}
                                                                                isAuth={this.state.isAuth}
                                                                                auth={this.state.auth}
                                                                                onButtonClick={func}/>}/>
                                <Route path={'/posts'} component={Posts}/>
                                <Route path={'/auth'} component={Authorization}/>
                                <Route path={'/categories'} component={Categories}/>
                                <Route path={'/registration'} component={Registration}/>
                                <Route path={'/profile'} component={Profile}/>
                                <Route path={'/fullpost/:id'} component={FullPost}/>
                                <Route path={'/author/:id'} component={Profile}/>
                                <Route path={'/admin'} component={Admin}/>

                            </Switch>
                        ) : (
                            <Switch>
                                <Route path={'/'} exact
                                       render={() => <MainPage changeIsAuth={funcIsAuth} isAuth={this.state.isAuth}
                                                               auth={this.state.auth}/>}/>
                            </Switch>
                        )
                    }
                </BrowserRouter>
        )
    }
}

export default App;
