import React from 'react'
import CommentList from './CommentList'

class CommentBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            comments: []
        }
        // this.onCommentChange = this.onCommentChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.delectComment = this.delectComment.bind(this);
    }

    delectComment(index){
        // It's not recommended to modified the value directly which in state, so copy one
        const list=[...this.state.comments];
        list.splice(index,1)
        this.setState({
            comments:list
        })
    }


    onFormSubmit(event) {
        var value = this.textInput.value;
        if (value) {
            this.setState({
                comments: [...this.state.comments, value],

            })
            this.textInput.value = ''
        }

        event.preventDefault();// ban the default bahavior(jump to a paged)

    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <div>
                        <label>

                        </label>

                        <input
                            type="text"
                            placeholder="Please input comments"
                            className="form-control"
                            // onChange={this.onCommentChange}
                            // value={this.state.comment}
                            ref={(textInput) => { this.textInput = textInput }}
                            style={{width:'80%'}}

                        />

                        <button
                            type="submit"
                            className="btn btn-primary"
                        >
                            submit
                        </button>
                    </div>
                </form>
                <CommentList comments={this.state.comments} handleClick={this.delectComment}/>
            </div>

        )
    }

}
export default CommentBox