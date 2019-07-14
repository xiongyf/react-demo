import React from 'react'

class NameCard extends React.Component {

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