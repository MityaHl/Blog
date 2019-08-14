import React, { Component } from 'react';
import axios from "axios";

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {value: '', posts: [], categories: [], dataIsLoad: false};
        this.promiseRequests = this.promiseRequests.bind(this);
        this.showCategoriesPage = this.showCategoriesPage.bind(this);
        this.showNothing = this.showNothing.bind(this);
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

    selectCategory(posts, categories, authors, value) {
        return(
            <div>
                {
                    posts.map((post, index) => (
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

    showCategoriesPage(posts, categories, authors) {
        return (
            <div>
                <select className="form-control" onChange={this.selectCategory(posts, categories, authors, this.state.value)}>
                    <option selected value="all">Все категории</option>
                    <option value="auto">Авто</option>
                    <option value="food">Еда</option>
                </select>
            </div>
        )
    }

    showNothing() {
        return(
                <div>
                    <h1>жди</h1>
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
                    this.state.dataIsLoad && this.state.posts instanceof Array && this.state.categories instanceof Array ? (this.showCategoriesPage(posts, categories, authors)) : (this.showNothing())
                }
            </div>
        )
    }
}

export default Categories;