import React, {useState, useEffect} from 'react'

export default function NameCard() {

    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [tags, setTags] = useState([]);
    const personId = '1';

    useEffect(() => {
        setLoading(true);
        setName("Richard");
        setTags(["Humour", "Gentle"]);
        setLoading(false);
    }, [personId]);

    if (loading === true) {
        return <p>Loading ...</p>
    }

    return <div className="alert alert-success">
        <h4 className="alert-heading">Name: {name}</h4>

        <p>
            {tags.map((tag, index) => (
                <span key={index} className="badge badge-pill badge-primary">{tag}</span>
            ))}

        </p>

    </div>

}