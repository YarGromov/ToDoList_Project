import React from 'react';
import './App.css';
import {TasksPropsType, TodoList} from "./TodoList";

function App() {

    let tasks1: Array<TasksPropsType> = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false}
    ]

    let tasks2: Array<TasksPropsType>  = [
        {id: 1, title: 'Hello world', isDone: true},
        {id: 2, title: 'Im happy', isDone: false},
        {id: 3, title: 'Yo', isDone: true}
    ]



  return (
    <div className="App">
     <TodoList title='What to learn' tasks={tasks1}/>
     <TodoList title='Songs' tasks={tasks2}/>
    </div>
  );
}

export default App;
