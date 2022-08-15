import React from 'react';
import './App.css';
import {TasksPropsType, TodoList} from "./TodoList";

function App() {

    let tasks1: Array<TasksPropsType> = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 1, title: 'JS', isDone: true},
        {id: 1, title: 'React', isDone: false}
    ]

    let tasks2: Array<TasksPropsType>  = [
        {id: 1, title: 'Terminator', isDone: true},
        {id: 1, title: 'XXX', isDone: false},
        {id: 1, title: 'Iron Man', isDone: true}
    ]



  return (
    <div className="App">
     <TodoList title='What to learn' tasks={tasks1}/>
     <TodoList title='What to read' tasks={tasks2}/>
    </div>
  );
}

export default App;
