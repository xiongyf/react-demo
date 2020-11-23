import React from 'react';
import LikesButton from './LikesButton'

class CommentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    handleClick(index) {
        this.props.handleClick(index)
    }

    render() {
        return (
            <div>
                <ul className="list-group mb-3">
                    {this.props.comments.map((comment, index) => (
                        <li className="list-group-item" key={index}>
                            {/* bind 'this' when call the function */}
                            <span onClick={this.handleClick.bind(this, index)}>{comment}</span>
                            <span><LikesButton></LikesButton></span>
                        </li>

                    ))}
                </ul>
            </div>
        )
    }
}

export default CommentList;