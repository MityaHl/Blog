import React, {Component} from 'react';
import Registration from '../Auth/Registration'
import { BrowserRouter, Switch, Route } from 'react-router-dom';import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import Authorization from "../Auth/Authorization";
import Categories from "../Categories/Categories";
import Profile from "../Profile/Profile";
import FullPost from "../Posts/FullPost";
import SayHi from "./SayHi";
class MainPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            prop: true
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
           prop: !this.state.prop
        });
    }

    render() {
        const func = this.props.changeIsAuth;
        return (
            <div>
                <div className="auth-forms">
                    {
                      this.props.isAuth ? (<SayHi/>) : (
                        !this.props.auth ? (
                            <div className="container">
                                <Registration onButtonClick={this.props.onButtonClick}/>
                            </div>
                            ) :
                            (
                                <div className="container">
                                    <Authorization changeAuth={func}/>
                                </div>
                            )
                      )
                    }
                </div>
            </div>
        )
    }
}

export default MainPage;
