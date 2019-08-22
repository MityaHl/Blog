import React, { Component } from 'react';
import axios from "axios";

class FullPost extends Component {

    constructor(props) {
        super(props);
        this.state = { post: {}};
    }

    componentWillMount() {
        axios
            .get('/api/posts/'+ this.props.match.params.id)
            .then(response => {
                this.setState({post: response.data });
            })
    }

    render() {
        return (
            <div className="container">
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

                        console.log(this.state.post)
                   /*
                        this.state.post.comments.map((comment, index) => (
                                <div>
                                    <p>{comment.text}</p>
                                </div>
                        ))*/
                    }
                </div>
            </div>
        )
    }
}

export default FullPost;