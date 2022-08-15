import React from 'react';
import './App.css';
import {TasksPropsType, TodoList} from "./TodoList";

function App() {

    let tasks: Array<TasksPropsType> = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false}
    ]

    const removeTask = (id: number) => {
        tasks = tasks.filter( (t) => t.id !== id)
    }


  return (
    <div className="App">
     <TodoList title='What to learn'
               tasks={tasks}
               removeTask={removeTask}
     />
    </div>
  );
}

export default App;
