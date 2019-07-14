import React from 'react';
import NameCard from './components/NameCard'
import LikesButtun from './components/LikesButtun'
import CommentBox from './components/CommentBox'

/**
 * Component's life cycle：when create、update、unload
 * Callback functions：
 * create：construtor,render,componentDidMount, react update DOM and refs 
 * update: render(when new props,setState,forceUpdate),componentDidUpdate, react update DOM and refs 
 * unload: componentWillUnmount
 * 
 */

function App() {
  const tags = ['Good man', 'a little bad', 'joker']
  return (
    <div>
      <NameCard name="Viking" phone="132565258" tags={tags}></NameCard>
      <LikesButtun></LikesButtun>
      <CommentBox></CommentBox>
    </div>
  );
}

export default App;
