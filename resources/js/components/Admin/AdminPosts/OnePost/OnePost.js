import React, {Component} from 'react';

class OnePost extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
                <tr>
                    <td>
                        {this.props.post.title}
                    </td>
                    <td className="text-center">
                        {this.props.post.categories.title}
                    </td>
                    <td className="text-center">
                        {this.props.post.users.name}
                    </td>
                    <td className="text-center">
                        {this.props.post.created_at}
                    </td>
                    <td className="text-center">
                        <i className="fas fa-edit"></i>
                    </td>
                    <td className="text-center">
                        <i className="fas fa-trash-alt"></i>
                    </td>
                </tr>
        )
    }
}

export default OnePost;
