import React, { Component } from 'react';
import axios from "axios";

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            password_confirmation: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handlePassConfirmChange = this.handlePassConfirmChange.bind(this);
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
        data.name = this.state.name;
        data.email = this.state.email;
        data.password_confirmation = this.state.password_confirmation;
        console.log(data);
        axios.post('/register', data)
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email адрес</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange}
                               placeholder="Введите email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Имя</label>
                        <input type="text" className="form-control" value={this.state.name} onChange={this.handleNameChange}
                               placeholder="Введите имя"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Пароль</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange}
                               placeholder="Пароль"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Пароль</label>
                        <input type="password" className="form-control" value={this.state.password_confirmation} onChange={this.handlePassConfirmChange}
                               placeholder="Пароль"/>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary">Зарегестрироваться</button>
                </form>
            </div>
        )
    }
}

export default Registration;
