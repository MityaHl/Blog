import React, {Component} from 'react';
import Header from "./Header/Header";
import {BrowserRouter} from "react-router-dom";
import MainPage from "./MainPage/MainPage";
import Posts from "./Posts/Posts";
import Authorization from "./Auth/Authorization";
import Categories from "./Categories/Categories";
import Registration from "./Auth/Registration";
import Profile from "./Profile/Profile";
import FullPost from "./Posts/FullPost";
import Admin from "../Admin/Admin";
import AdminPosts from "../Admin/AdminPosts/AdminPosts";

class Public extends Component {
    render() {
        return (
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
                <Route path={'/admin/posts'} component={AdminPosts}/>
            </Switch>
        )
    }
}

export default Public;
