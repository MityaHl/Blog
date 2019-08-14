import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component{
    render() {
        return (
            <div className="jumbotron full-head">
                <div className="container header ">
                    <div className="name">
                        <h1>Блог</h1>
                    </div>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;
