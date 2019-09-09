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
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3 snoop">
                        <img src="https://i.gifer.com/6os.gif" alt=""/>
                    </div>
                    <div className="col-md-9">
                        <div className="auth-forms">
                            {
                                this.props.isAuth ? (<SayHi/>) : (
                                    !this.props.auth ? <Registration/> : <Authorization/>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;
