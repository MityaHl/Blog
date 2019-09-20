import React, {Component} from 'react';
import axios from 'axios';
class CreatePost extends Component{

    constructor(props) {
        super(props);
        this.state = {
            postData: {
                title: '',
                author_id: '',
                content: '',
                image: '',
                category_id: '',
                tag_id: 1,
            },
            count: false,
            categories: [],
            users: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.promiseRequests = this.promiseRequests.bind(this);
    }

    promiseRequests() {
        let promCount = 0;
        return new Promise( resolve => {
                axios
                    .get('/api/users')
                    .then(response => {
                        this.setState({users: response.data });
                        promCount++;
                        if(promCount == 2) resolve();
                    }),
                axios
                    .get('/api/categories')
                    .then(response => {
                        this.setState({categories: response.data });
                        promCount++;
                        if(promCount == 2) resolve();
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

    handleChange(e){
        this.setState({
            postData: {
                ...this.state.postData,
                [e.target.name]: e.target.value
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.postData);
        axios
            .post("/api/posts", this.state.postData);
    }

    render() {
        const count = this.state.count;
        const categories = this.state.categories;
        const users = this.state.users;
        return(
            <div>
                {
                    categories instanceof Array && users instanceof Array && count ? (<div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Заголовок статьи</label>
                                <input className="form-control" name="title" value={this.state.postData.title} type="text" placeholder="Заголовок" onChange={this.handleChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Картинка</label>
                                <input className="form-control" name="image" value={this.state.postData.image} type="text" placeholder="Картинка" onChange={this.handleChange}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="author-name">Имя автора</label>
                                <select className="form-control" name="author_id"  size="5" onChange={this.handleChange} >
                                    <option>Имя пользователя</option>
                                    {
                                        this.state.users.map((user, index) => (
                                            <option value={user.id}>
                                                {
                                                    user.name
                                                }
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="form-group" >
                                <label htmlFor="name">Категория</label>
                                <select className="form-control" name="category_id"  size="5" onChange={this.handleChange}>
                                    <option>Default select</option>
                                    {
                                        this.state.categories.map((category, index) => (
                                            <option value={category.id}>
                                                {
                                                    category.title
                                                }
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="name">Текст статьи</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="content" value={this.state.postData.content} onChange={this.handleChange}></textarea>
                            </div>

                            <button className="btn btn-primary" type="submit">Создать</button>
                        </form>
                    </div>) : (<div></div>)
                }
            </div>
        )
    }
}

export default CreatePost;
