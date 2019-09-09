import React,  {PureComponent}  from 'react';
import {Link} from "react-router-dom";

class Header extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
        }
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
                                <div className="list-inline-item">
                                    <Link to={'/'}>
                                        <button className="btn"> Главная </button>
                                    </Link>
                                </div>
                                <div className="list-inline-item">
                                    <Link to={'/posts'}>
                                        <button className="btn"> Посты </button>
                                    </Link>
                                </div>

                                <div className="list-inline-item">
                                    <Link to={'/categories'}>
                                        <button className="btn"> Категории </button>
                                    </Link>
                                </div>

                                <div className="list-inline-item">
                                    <Link to={'/profile'}>
                                        <button className="btn"> Профиль </button>
                                    </Link>
                                </div>
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
