import {AddItemForm} from "./AddItemForm";
import {action} from "@storybook/addon-actions";
import {Task} from "./Task";
import React from "react";


export default {
    title: 'Task Component',
    component: Task
}

const changeTaskStatusCallback = action('Status changed')
const changeTaskTitleCallback = action('Title changed')
const changeTaskCallback = action('Task changed')

export const TaskBaseExample = (props: any) => {
    return <>
        <Task
            task={ {id: '1', isDone: true, title: 'CSS' } }
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            removeTask={changeTaskCallback}
            todolistId={'todolistId1'}
        />
        <Task
            task={ {id: '2', isDone: false, title: 'JS' } }
            changeTaskStatus={changeTaskStatusCallback}
            changeTaskTitle={changeTaskTitleCallback}
            removeTask={changeTaskCallback}
            todolistId={'todolistId2'}
        />
    </>
}