import React, {Component} from 'react'
import AdminHeader from './AdminHeader/AdminHeader'
import AdminPosts from './AdminPosts/AdminPosts'

import {BrowserRouter} from "react-router-dom";
class Admin extends Component {
    render() {
        return (
            <div>
                <AdminHeader/>
                <AdminPosts/>
            </div>
        )
    }
}

export default Admin
