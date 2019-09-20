import React, {Component} from 'react';
import OnePost from "../AdminPosts/OnePost/OnePost";
import axios from "axios";
import OneUser from "./OneUser/OneUser";

class AdminUsers extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [], count: false};
        this.promiseRequests = this.promiseRequests.bind(this);
        this.showUsers = this.showUsers.bind(this);
        this.showNothing = this.showNothing.bind(this);
    }

    showUsers() {
        return(
            this.state.users.map((user, index) => (
                <OneUser user={user}/>
            ))
        )
    }

    promiseRequests() {
        return new Promise( resolve => {
            axios
                .get('/api/users')
                .then(response => {
                    this.setState({users: response.data }, resolve);
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
        const users = this.state.users;
        const count = this.state.count;
        return(
            <div>
                <div className="posts-list-title text-center">
                    <h2>Список пользователей</h2>
                </div>
                {
                    users instanceof Array && count ? (
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                            <tr className="text-center">
                                <th>Имя</th>
                                <th>Статут</th>
                                <th>email</th>
                                <th>Дата регистрации</th>
                                <th>Изменение</th>
                                <th>Удаление</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.showUsers()
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
export default AdminUsers;
