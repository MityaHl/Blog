import React, { Component } from 'react';
import axios from "axios";
import Post from "../Posts/Post/Post";

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', posts: [], categories: [], dataIsLoad: false};
        this.promiseRequests = this.promiseRequests.bind(this);
        this.showCategoriesPage = this.showCategoriesPage.bind(this);
        this.showNothing = this.showNothing.bind(this);
        this.showCategory = this.showCategory.bind(this);
        this.selectCategory = this.selectCategory.bind(this);
    }

    promiseRequests() {
        let countQuery = 0;
        return new Promise( resolve => {
            axios
                .get('/api/posts')
                .then(response => {
                    countQuery++;
                    this.setState({
                        posts: response.data
                    });
                    if(countQuery == 3) resolve();
                });
            axios
                .get('/api/categories')
                .then(responce => {
                    countQuery++;
                    this.setState({
                        categories: responce.data
                    });
                    if(countQuery == 3) resolve();
                });
            axios
                .get('/api/users')
                .then(response => {
                    this.setState({users: response.data });
                    countQuery++;
                    if(countQuery == 3) resolve();
                })
        })
    }

    componentWillMount() {
        this.promiseRequests()
            .then(() => {
                this.setState({
                    dataIsLoad: true
                });
            })
    }

    selectCategory(e) {
        console.log("selectCategory");
        this.setState({
            value: Number(e.target.value)
        });
    }

    showCategory(posts, authors, categories) {
        let newPosts = [];
        if(this.state.value == 0) {
            newPosts = posts;
        } else{
            for(let i = 0; i < posts.length; i++) {
                if(posts[i].category_id === this.state.value) {
                    newPosts.push(posts[i]);
                }
            }
        }

        return(
            <div>
                {
                    newPosts.map((post, index) => (
                             <Post key={index} post={post} authors={authors} categories={categories}/>
                    ))
                }
            </div>
        )
    }

    showCategoriesPage(posts, authors, categories) {
        return (
            <div className="category_select">
                <select className="form-control" onChange={this.selectCategory}>
                    <option selected value="0">Все категории</option>
                    <option value="1">Авто</option>
                    <option value="2">Еда</option>
                </select>
                {this.showCategory(posts, authors, categories)}
            </div>
        )
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
        const authors = this.state.users;
        const categories = this.state.categories;
        return (
            <div className="container">
                {
                    this.state.dataIsLoad && this.state.posts instanceof Array && this.state.categories instanceof Array ? (this.showCategoriesPage(posts, authors, categories)) : (this.showNothing())
                }
            </div>
        )
    }
}

export default Categories;