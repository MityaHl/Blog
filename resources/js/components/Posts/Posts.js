import React, { Component } from 'react';
import axios from "axios";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Post from '../Posts/Post/Post'
class Posts extends Component {

    constructor(props){
        super(props);
        this.state = {posts: [], users: [], categories: [], count: false};
        this.promiseRequests = this.promiseRequests.bind(this);
        this.showPosts = this.showPosts.bind(this);
        this.showNothing = this.showNothing.bind(this);
    }

    promiseRequests() {
        let promCount = 0;
        return new Promise( resolve => {
            axios
                .get('/api/posts')
                .then(response => {
                    this.setState({posts: response.data });
                    promCount++;
                    if(promCount == 3) resolve();
                }),
            axios
                .get('/api/users')
                .then(response => {
                    this.setState({users: response.data });
                    promCount++;
                    if(promCount == 3) resolve();
                }),
            axios
                .get('/api/categories')
                .then(response => {
                    this.setState({categories: response.data });
                    promCount++;
                    if(promCount == 3) resolve();
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
            <div>
                <h1>Жди!</h1>
            </div>
        )
    }

    showPosts(authors, categories) {
        return (
            <div>
                {
                    this.state.posts.map((post, index) => (
                        <Post post={post} authors={authors} categories={categories}/>
                    ))
                }
            </div>
        )
    }

    render() {
        const authors = this.state.users;
        const categories = this.state.categories;
        return (
            <div className="container">
                {
                     categories instanceof Array && authors instanceof Array && this.state.count ? (this.showPosts(authors, categories)) : (this.showNothing())
                }
            </div>
        )
    }
}

export default Posts;
