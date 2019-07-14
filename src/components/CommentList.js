import React from 'react';
import LikesButtun from './LikesButtun'
class CommentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }


    }

    handleClick(index){
        this.props.handleClick(index)
    }

    render() {
        return (
            <div>
                <ul className="list-group mb-3">
                    {this.props.comments.map((comment,index)=>(
                        <li className="list-group-item" key={index}>
                            {/* bind 'this' when call the function */}
                            <span onClick={this.handleClick.bind(this,index)}>{comment}</span>
                            <span><LikesButtun></LikesButtun></span>
                        </li>

                    ))}
                </ul>
            </div>
        )
    }
}
export default CommentList