import React from 'react'
import axios from 'axios';

class NameCard extends React.Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3000/')
        .then(res=>{
                console.log(res.data)
            }
        )
    }

    render() {

       // const { name, phone, isHuman, tags } = this.props;

        return (
            <div className="alert alert-success">
                <h4 className="alert-heading">{this.props.name}</h4>
                <ul>
                    <li>Phone: {this.props.phone}</li>
                    <li>{this.props.isHuman ? 'Humanbeing' : "Alient"}</li></ul>
                <hr />
                <p>
                    {this.props.tags.map((tag, index) => (
                        <span key={index} className="badge badge-pill badge-primary">{tag}</span>
                    ))}
                    
                </p>

            </div>
        )
    }
}
export default NameCard