import React, { Component } from 'react';

class Registration extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email адрес</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                               placeholder="Введите email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Пароль"/>
                    </div>
                    <button type="submit" className="btn btn-outline-secondary">Зарегестрироваться</button>
                </form>
            </div>
        )
    }
}

export default Registration;