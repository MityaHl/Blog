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
            <div className="full-head">
                <div className="header">
                    <div className="header-content container">
                        <div className="name">
                            <h1>Блог</h1>
                        </div>
                        {
                            this.props.isAuth ? (
                                <div className="menu list-inline">
                                    <Link to={'/'}>
                                        <button className="btn btn-outline-light menu-btn"> Главная </button>
                                    </Link>
                                    <Link to={'/posts'}>
                                        <button className="btn btn-outline-light menu-btn"> Статьи </button>
                                    </Link>
                                    <Link to={'/categories'}>
                                        <button className="btn btn-outline-light menu-btn"> Категории </button>
                                    </Link>
                                    <Link to={'/profile'}>
                                        <button className="btn btn-outline-light menu-btn"> Профиль </button>
                                    </Link>
                                    <Link to={'/'}>
                                        <button className="btn btn-warning menu-btn log-out-btn" onClick={this.logOut}> Выйти </button>
                                    </Link>
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
            </div>
        )
    }
}

export default Header;
