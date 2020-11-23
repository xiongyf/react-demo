import React, {useState, useReducer} from 'react';
import {countReducer} from '../reducer/CountReducer';

export default function LikesButton() {
    // const [likes, setLikes] = useState(0);
    const [state, dispatch] = useReducer(countReducer, {count: 0});

    function handleClick() {
        // return setLikes(likes + 1);
        return dispatch({type: 'countUp'});

    }

    return <button
        type="button"
        className="btn btn-outline-primary btn-lg"
        onClick={handleClick}
    >
        Like {state.count}
    </button>;

}

