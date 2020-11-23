import React from 'react';
import NameCard from './components/NameCard'
import LikesButton from './components/LikesButton'
import CommentBox from './components/CommentBox'

/**
 * Component's life cycle：when create、update、unload
 * Callback functions：
 * create：constructor,render,componentDidMount, react update DOM and refs
 * update: render(when new props,setState,forceUpdate),componentDidUpdate, react update DOM and refs
 * unload: componentWillUnmount
 *
 */

function App() {

    return (
        <div>
            <NameCard></NameCard>
            <LikesButton></LikesButton>
            <CommentBox></CommentBox>
        </div>
    );
}

export default App;
