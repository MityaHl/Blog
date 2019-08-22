import React, {Component} from 'react';
import axios from "axios";

class Profile extends Component{

    constructor(props) {
        super(props);
        this.state = {};
        this.promiseRequests = this.promiseRequests.bind(this);

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
                    if(countQuery == 1) resolve();
                });
        })
    }

    render() {
        return (
           <div className="container">
               <div className="row">
                   <div className="user-info col-md-4">
                       <img src="https://sun9-55.userapi.com/c836435/v836435967/2c962/ZjNR1MUQ3MU.jpg" alt=""
                            className="rounded"/>
                   </div>
                   <div className="user-posts col-md-8">
                       Посты
                   </div>
               </div>
           </div>
        )
    }
}

export default Profile;
