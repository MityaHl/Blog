import React, { Component } from 'react';
import axios from "axios";
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
                        <div className="post card text-center" key={post.id}>
                            <div className="card-header">
                                <div className="post-name">
                                    <h2>{post.title}</h2>
                                    <p className="text-left">Категория: {categories[post.category_id-1].title}</p>
                                </div>
                                <div className="post-author">
                                    <h4>{authors[post.author_id-1].name}</h4>
                                    <img src="https://sun9-55.userapi.com/c836435/v836435967/2c962/ZjNR1MUQ3MU.jpg" alt=""
                                         className="rounded-circle"/>
                                </div>
                            </div>
                            <div className="post-info card-body">
                                <div className="image">
                                    <img src={post.image} alt=""
                                         className="mx-auto d-block"/>
                                </div>
                                <div className="main-info d-flex flex-column">
                                    <div className="info-text">
                                        <p className="text-justify card-text"> {post.content} </p>
                                    </div>
                                </div>
                            </div>
                            <div className="full-post-btn">
                                    <button data-toggle="button" className="btn btn-outline-secondary" >Читать</button>

                            </div>
                        </div>
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
