import React, {Component} from 'react';

class OneUser extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <tr>
                <td>
                    {this.props.user.name}
                </td>
                <td className="text-center">
                    Статус
                </td>
                <td className="text-center">
                    {this.props.user.email}
                </td>
                <td className="text-center">
                    {this.props.user.created_at}
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

export default OneUser;
