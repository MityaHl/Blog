import React, {Component} from 'react';
import axios from "axios";
import Post from "../Posts/Post/Post";
import {Link} from "react-router-dom";

class Profile extends Component{

    constructor(props) {
        super(props);
        this.state = {posts: '', count: '', user: ''};
        this.promiseRequests = this.promiseRequests.bind(this);
        this.showPosts = this.showPosts.bind(this);
        this.showNothing = this.showNothing.bind(this);
    }


    promiseRequests() {
        console.log(this.props);
        let countQuery = 0;
        return new Promise( resolve => {
            axios
                .get('/api/posts')
                .then(response => {
                    countQuery++;
                    this.setState({
                        posts: response.data
                    });
                    if(countQuery == 2) resolve();
                });
            axios
                .get('/api/users/' + this.props.match.params.id)
                .then(response => {
                    countQuery++;
                    this.setState({
                        user: response.data
                    });
                    if(countQuery == 2) resolve();
                });
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

    showPosts() {
        return (
            <div>
                <h1>Посты</h1>
                <div className="card">
                    {
                        this.state.posts.map((post, index) => (
                            <div className="card-header" key={post.id}>
                                <h3 className="profile-posts-titles">{post.title}</h3>
                                <Link to={'/fullpost/' + post.id}>
                                    <button className="btn profile-posts-button btn-outline-secondary" >Читать</button>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    render() {
        const posts = this.state.posts;
        return (
           <div className="container">
               <div className="row">
                   <div className="user-info col-md-4">
                       <img src="https://sun9-55.userapi.com/c836435/v836435967/2c962/ZjNR1MUQ3MU.jpg" alt=""
                            className="rounded"/>
                        <div className="user-name">
                            <h4>Mitya Khlopyanikov</h4>
                        </div>
                   </div>
                   <div className="user-posts col-md-8">
                       {
                           posts instanceof Array  && this.state.count ? (this.showPosts()) : (this.showNothing())
                       }
                   </div>
               </div>
           </div>
        )
    }
}

export default Profile;
