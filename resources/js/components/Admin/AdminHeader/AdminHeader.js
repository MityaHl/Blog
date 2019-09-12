import React, {Component} from 'react'

class AdminHeader extends Component {
    render() {
        return(
            <div className="admin-header">
                <div className="admin-header-content container">
                    <div className="admin-name col-md-3">
                        <h1>Адменка</h1>
                    </div>
                    <div className="admin-menu col-md-9">
                        <button className="btn btn-outline-secondary menu-btn"> Профиль </button>
                        <button className="btn btn-outline-secondary menu-btn"> Профиль </button>
                        <button className="btn btn-outline-secondary menu-btn"> Профиль </button>
                        <button className="btn btn-outline-secondary menu-btn"> Профиль </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminHeader
