import React,  {PureComponent}  from 'react';
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


class App extends PureComponent{

    constructor(props) {
        super(props);
        this.state = {
            isAuth: false,
            auth: false
        };
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
            this.setState({
                auth: !this.state.auth
            })
    }

    render() {
        const func = this.onButtonClick;
        return (
                <BrowserRouter>
                    <Header
                        isAuth={this.state.isAuth}
                        auth={this.state.auth}
                        onButtonClick={
                            func
                        }
                    />
                    {
                        this.state.isAuth ? (
                            <Switch>
                                <Route path={'/'} exact render={()=><MainPage isAuth={this.state.isAuth} auth={this.state.auth} onButtonClick={
                                    func
                                }/>} />
                                <Route path={'/posts'} component={ Posts } />
                                <Route path={'/auth'} component={ Authorization } />
                                <Route path={'/categories'} component={ Categories } />
                                <Route path={'/registration'} component={ Registration } />
                                <Route path={'/profile'} component={ Profile } />
                                <Route path={'/fullpost/:id'} component={ FullPost } />
                                <Route path={'/author/:id'} component={ Profile } />
                            </Switch>
                        ) : (
                            <Switch>
                                <Route path={'/'} exact render={()=><MainPage isAuth={this.state.isAuth} auth={this.state.auth}/>} />
                            </Switch>
                        )
                    }

                    }

                </BrowserRouter>
        )
    }
}

export default App;
