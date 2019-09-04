import React, { Component } from 'react';
import axios from "axios";

class FullPost extends Component {

    constructor(props) {
        super(props);
        this.state = { post: {}};
        this.promiseRequests = this.promiseRequests.bind(this);
    }

    promiseRequests() {
        let promCount = 0;
        return new Promise( resolve => {
            axios
                .get('/api/posts/'+ this.props.match.params.id)
                .then(response => {
                    this.setState({post: response.data });
                    if(promCount == 1) resolve();
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

    render() {
        return (
            <div className="container border border-secondary rounded">
                <div className="post-title">
                    <h1>{this.state.post.title}</h1>
                </div>
                <div className="post-img text-center">
                    <img src={this.state.post.image}/>
                </div>
                <div className="post-content">
                    <p>{this.state.post.content}</p>
                </div>
                <div className="post-author">
                    <img src="" alt=""/>
                </div>
                <div className="post-comments">
                    {

                    }
                </div>
            </div>
        )
    }
}

export default FullPost;