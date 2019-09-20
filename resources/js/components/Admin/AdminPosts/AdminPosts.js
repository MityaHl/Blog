import React, {Component} from 'react';
import axios from "axios";
import OnePost from './OnePost/OnePost'
import {Link} from "react-router-dom";

class AdminPosts extends Component {

    constructor(props) {
        super(props);
        this.state = { posts: [], count: false};
        this.promiseRequests = this.promiseRequests.bind(this);
        this.showPosts = this.showPosts.bind(this);
        this.showNothing = this.showNothing.bind(this);
    }

    showPosts() {
        return(
            this.state.posts.map((post, index) => (
                <OnePost post={post}/>
            ))
        )
    }

    promiseRequests() {
        return new Promise( resolve => {
            axios
                .get('/api/posts')
                .then(response => {
                    this.setState({posts: response.data }, resolve);
                })
        })
    }

    componentWillMount() {
        this.promiseRequests()
            .then(() => {
                this.setState({
                    count: true
                });
            })
    }

    showNothing() {
        return (
            <div className="spinner-block">
                <div className="spinner-border">

                </div>
            </div>
        )
    }

    render() {
        const posts = this.state.posts;
        const count = this.state.count;
        return(
            <div>
                <div className="posts-list-title text-center">
                    <h2>Список статей</h2>
                    <Link to={'/admin/posts/create'}>
                        <button className="btn btn-outline-dark admin-create-button"> Создать статью </button>
                    </Link>
                </div>
                {
                    posts instanceof Array && count ? (
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                            <tr className="text-center">
                                <th>Заголовок</th>
                                <th>Категория</th>
                                <th>Автор</th>
                                <th>Дата создания</th>
                                <th>Изменение</th>
                                <th>Удаление</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.showPosts()
                            }
                            </tbody>
                        </table>
                    ) : (
                        this.showNothing()
                    )
                }
            </div>
        )
    }
}

export default AdminPosts;
