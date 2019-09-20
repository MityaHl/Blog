import React, {Component} from 'react'
import AdminHeader from './AdminHeader/AdminHeader'
import AdminPosts from './AdminPosts/AdminPosts'
import AdminUsers from './AdminUsers/AdminUsers'
import {Route} from "react-router-dom";
import AdminCategories from "./AdminCategories/AdminCategories";
import CreatePost from "./AdminPosts/Create/CreatePost";

class Admin extends Component {
    render() {
        return (
            <React.Fragment>
                <AdminHeader/>
                <Route path={'/admin/posts'} exact component={ AdminPosts } />
                <Route path={'/admin/posts/create'} exact component={ CreatePost } />
                <Route path={'/admin/users'} exact component={ AdminUsers } />
                <Route path={'/admin/categories'} exact component={ AdminCategories } />
            </React.Fragment>
        )
    }
}

export default Admin
