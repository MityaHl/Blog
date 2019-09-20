import React, {Component} from 'react';
import Header from "./Header/Header";
import MainPage from "./MainPage/MainPage";
import Posts from "./Posts/Posts";
import Authorization from "./Auth/Authorization";
import Categories from "./Categories/Categories";
import Registration from "./Auth/Registration";
import Profile from "./Profile/Profile";
import FullPost from "./Posts/FullPost";
import axios from "axios";
import {Route} from "react-router-dom";

class Public extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isAuth: false,
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
        return (
            <div>
                <Header
                    isAuth={this.state.isAuth}
                    auth={this.state.auth}
                    onButtonClick={
                        this.onButtonClick
                    }
                    funcIsAuth={
                        this.changeIsAuth
                    }/>

                    <Route path={'/'} exact render={() => <MainPage changeIsAuth={this.changeIsAuth}
                                                                    isAuth={this.state.isAuth}
                                                                    auth={this.state.auth}
                                                                    onButtonClick={this.onButtonClick}/>}/>
                    <Route path={'/posts'} exact component={Posts}/>
                    <Route path={'/auth'}  component={Authorization}/>
                    <Route path={'/categories'} component={Categories}/>
                    <Route path={'/registration'} component={Registration}/>
                    <Route path={'/profile'} render={(props) => <Profile {...props}/> }/>
                    <Route path={'/fullpost/:id'} component={FullPost}/>
                    <Route path={'/author/:id'} component={Profile}/>
            </div>
        )
    }
}

export default Public;
