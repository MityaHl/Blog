import React, {Component} from 'react';

class Profile extends Component{
    render() {
        return (
           <div className="container">
               <div className="user-info">
                   <img src="https://sun9-55.userapi.com/c836435/v836435967/2c962/ZjNR1MUQ3MU.jpg" alt=""
                   className="rounded"/>
               </div>
               <div className="user-posts">
                    Посты
               </div>
           </div>
        )
    }
}

export default Profile;
