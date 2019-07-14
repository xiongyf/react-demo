// 引入react库，使浏览器能理解react语法
import React from 'react';
import ReactDOM from 'react-dom';
//import bootstrap style, which should install first via command npm install bootstrap --save
import 'bootstrap/dist/css/bootstrap.min.css'

// App组件，React中，组件名用大写字母开头
import App from './App';

// 将组件挂载到dom节点上
//ReactDOM.render(...) 是渲染方法，所有的 js,html 都可通过它进行渲染绘制。有两个参数，内容和渲染目标 js 对象。
ReactDOM.render(<App />, document.getElementById('root'));
