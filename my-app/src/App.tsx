import React, {useState} from 'react';
import './App.css';
import {TasksPropsType, TodoList} from "./TodoList";


export type FilterValuesType = 'All' | 'Active' | 'Completed'

function App() {

    let [tasks, setTasks] = useState<Array<TasksPropsType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false}
    ]);

    let [filter, setFilter ] = useState<FilterValuesType>('All');


    let tasksForTodoList = tasks;

    if (filter === 'Completed') {
        tasksForTodoList = tasks.filter(t => t.isDone)
    }
    if (filter === 'Active') {
        tasksForTodoList = tasks.filter(t => !t.isDone)
    }

    const removeTask = (id: number) => {
       let filteredTasks = tasks.filter( (t) => t.id !== id)
        setTasks(filteredTasks)
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }


  return (
    <div className="App">
     <TodoList title='What to learn'
               tasks={tasksForTodoList}
               removeTask={removeTask}
               changeFilter={changeFilter}
     />
    </div>
  );
}

export default App;
