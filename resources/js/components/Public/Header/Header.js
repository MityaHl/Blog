import React,  {PureComponent}  from 'react';
import {Link} from "react-router-dom";

class Header extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
        };
        this.logOut = this.logOut.bind(this);
    }

    logOut() {
        axios.post('/logout');
        this.props.funcIsAuth();
    }

    render() {
        const func = this.props.onButtonClick;
        return (
            <div className="jumbotron full-head">
                <div className="container header ">
                    <div className="name">
                        <h1>Блог</h1>
                    </div>
                    {
                        this.props.isAuth ? (
                            <div className="menu list-inline">
                                <Link to={'/'}>
                                    <button className="btn btn-outline-secondary menu-btn"> Главная </button>
                                </Link>
                                <Link to={'/posts'}>
                                    <button className="btn btn-outline-secondary menu-btn"> Посты </button>
                                </Link>
                                <Link to={'/categories'}>
                                    <button className="btn btn-outline-secondary menu-btn"> Категории </button>
                                </Link>
                                <Link to={'/profile'}>
                                    <button className="btn btn-outline-secondary menu-btn"> Профиль </button>
                                </Link>
                                <button className="btn btn-outline-secondary menu-btn" onClick={this.logOut}> Выйти </button>

                            </div>
                        ) : (
                            <div className="btn-group main-page-auth" role="group" aria-label="Basic example">
                                <div className="auth-buttons">
                                    <button type="button" className="btn btn-secondary" onClick={func}>
                                        {
                                            this.props.auth ? 'Регистрация' : 'Авторизация'
                                        }
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Header;
