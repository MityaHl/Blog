import React, {Component} from 'react';
import OnePost from "../AdminPosts/OnePost/OnePost";
import axios from "axios";
import OneCategory from "./OneCategory/OneCategory";

class AdminCategories extends Component {

    constructor(props) {
        super(props);
        this.state = { categories: [], count: false};
        this.promiseRequests = this.promiseRequests.bind(this);
        this.showCategories = this.showCategories.bind(this);
        this.showNothing = this.showNothing.bind(this);
    }

    showCategories() {
        return(
            this.state.categories.map((category, index) => (
                <OneCategory category={category}/>
            ))
        )
    }

    promiseRequests() {
        return new Promise( resolve => {
            axios
                .get('/api/categories')
                .then(response => {
                    this.setState({categories: response.data }, resolve);
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
        const categories = this.state.categories;
        const count = this.state.count;
        return(
            <div>
                <div className="posts-list-title text-center">
                    <h2>Список категорий</h2>
                    <Link>

                    </Link>
                </div>
                {
                    categories instanceof Array && count ? (
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                            <tr className="text-center">
                                <th>ID</th>
                                <th>Название категории</th>
                                <th>Дата добавления</th>
                                <th>Изменение</th>
                                <th>Удаление</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.showCategories()
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
export default AdminCategories;
