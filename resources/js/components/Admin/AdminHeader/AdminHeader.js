import React, {Component} from 'react'
import {Link} from "react-router-dom";

class AdminHeader extends Component {
    render() {
        return(
            <div className="admin-header">
                <div className="admin-header-content container">
                    <div className="row">
                        <div className="admin-name col-md-3">
                            <h1>Адменка</h1>
                        </div>
                        <div className="admin-menu col-md-9">
                            <Link to={'/admin/users'}>
                                <button className="btn btn-outline-light admin-menu-btn"> Пользователи </button>
                            </Link>
                            <Link to={'/admin/categories'}>
                                <button className="btn btn-outline-light admin-menu-btn"> Категории </button>
                            </Link>
                            <Link to={'/admin/posts'}>
                                <button className="btn btn-outline-light admin-menu-btn"> Статьи </button>
                            </Link>
                            <Link to={'/admin/comments'}>
                                <button className="btn btn-outline-light admin-menu-btn"> Комментарии </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminHeader
