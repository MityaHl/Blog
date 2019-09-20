import React, {Component} from 'react';

class OneCategory extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <tr>
                <td>
                    {this.props.category.id}
                </td>
                <td className="text-center">
                    {this.props.category.title}
                </td>
                <td className="text-center">
                    {this.props.category.created_at}
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

export default OneCategory;
