import React from 'react'

class LikesButtun extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
        //this.onButtunClick=this.onButtunClick.bind(this);
    }

    // Use arrow function to bind this
    onButtunClick = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }


    render() {
        return (
            <div>
                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                    onClick={this.onButtunClick}
                >
                    Like {this.state.likes}
                </button>
            </div>
        )
    }
}
export default LikesButtun