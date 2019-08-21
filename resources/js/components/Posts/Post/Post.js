import React, { Component } from 'react';

class Post extends Component {

    constructor(props) {
        super(props);
    }

    render() {
            return (
                <div className="post card text-center" key={this.props.post.id}>
                    <div className="card-header">
                        <div className="post-name">
                            <h2>{this.props.post.title}</h2>
                            <p className="text-left">Категория: {this.props.categories[this.props.post.category_id-1].title}</p>
                        </div>
                        <div className="post-author">
                            <h4>{this.props.authors[this.props.post.author_id-1].name}</h4>
                            <img src="https://sun9-55.userapi.com/c836435/v836435967/2c962/ZjNR1MUQ3MU.jpg" alt=""
                                 className="rounded-circle"/>
                        </div>
                    </div>
                    <div className="post-info card-body">
                        <div className="image">
                            <img src={this.props.post.image} alt=""
                                 className="mx-auto d-block"/>
                        </div>
                        <div className="main-info d-flex flex-column">
                            <div className="info-text">
                                <p className="text-justify card-text"> {this.props.post.content} </p>
                            </div>
                        </div>
                    </div>
                    <div className="full-post-btn">
                        <button data-toggle="button" className="btn btn-outline-secondary" >Читать</button>

                    </div>
                </div>
            )
    }
}

export default Post;