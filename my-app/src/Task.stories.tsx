
import React from 'react'
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";

export default {
    title: 'Task Component',
    component: Task
}

const changeTaskStatusCallback = action('Status was changed')
const changeTaskTitleCallback = action('Title was changed')
const removeTaskCallback = action('Task was removed')

export const TaskBaseExample = () => {


    return <>
        <Task
            task={ {id: '1', isDone: true, title: 'CSS'} }
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            removeTask={removeTaskCallback}
            todolistId={'todolistID1'}
        />
        <Task
            task={ {id: '2', isDone: false, title: 'JS'} }
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            removeTask={removeTaskCallback}
            todolistId={'todolistID2'}
        />
    </>
}