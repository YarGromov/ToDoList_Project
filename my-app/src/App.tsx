import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    const tasks1 = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 1, title: 'JS', isDone: true},
        {id: 1, title: 'React', isDone: false}
    ]
    const tasks2 = [
        {id: 1, title: 'Hello World!', isDone: true},
        {id: 1, title: 'I am happy!', isDone: true},
        {id: 1, title: 'Yo!', isDone: false}
    ]

    return (
        <div className="App">
           <Todolist title={'What to learn'} tasks={tasks1}/>
           <Todolist title={'What to buy'} tasks={tasks2}/>
        </div>
    );
}

export default App;
