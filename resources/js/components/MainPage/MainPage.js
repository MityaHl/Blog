import React, {Component} from 'react';
import Registration from '../Auth/Registration'
import { BrowserRouter, Switch, Route } from 'react-router-dom';import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import Authorization from "../Auth/Authorization";
import Categories from "../Categories/Categories";
import Profile from "../Profile/Profile";
import FullPost from "../Posts/FullPost";
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
                    <div className="col-md-3">
                        <img src="https://i.gifer.com/6os.gif" alt=""/>
                    </div>
                    <div className="col-md-9">
                        <div className="btn-group main-page-auth" role="group" aria-label="Basic example">
                            <div className="auth-buttons">
                                <button type="button" className="btn btn-secondary" onClick={this.handleClick}>Авторизация</button>
                                <button type="button" className="btn btn-secondary" onClick={this.handleClick}>Регистрация</button>
                            </div>
                            <div className="auth-forms">
                                {
                                    this.state.prop ? <Registration/> : <Authorization/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainPage;
