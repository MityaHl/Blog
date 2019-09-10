import React, { Component } from 'react';
import axios from "axios";

class Authorization extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handlePasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePassConfirmChange(e) {
        this.setState({
            password_confirmation: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = {};
        data.password = this.state.password;
        data.email = this.state.email;
        console.log(data);
        let func = this.props.changeAuth;
        console.log("auth", func);
        axios.post('/login', data)
            .then(

            )
    }

    render() {
        //console.log(this.props.changeIsAuth);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email адрес</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" onChange={this.handleEmailChange}
                               placeholder="Введите email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={this.handlePasswordChange} placeholder="Пароль"/>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary">Войти</button>
                </form>
            </div>
        )
    }
}

export default Authorization;
