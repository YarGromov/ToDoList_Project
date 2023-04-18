import React, {useEffect, useState} from 'react'
import {todolistAPI} from "../api/todolist-api";
import {instance} from "@storybook/node-logger";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodolists()
            .then((res) => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'NEST_JS'
        todolistAPI.createTodolist(title)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '9db758c7-b443-42e0-bdb0-f7a7d74dc972'
        todolistAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '3be05336-e455-4564-b18b-17aebb0da783'
        const title = 'UPDATE TITLE'
        todolistAPI.updateTodolist(todolistId, title).then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const GetTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState<string>('')


    const getTask = () => {
        todolistAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input placeholder={'Todolist Id'} value={todolistId}
                   onChange={(e)=>setTodolistId(e.currentTarget.value)}
            />

            <button onClick={getTask}>Get Task</button>
        </div>
    </div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskTitle, setTaskTitle] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')


    const createTask = () => {
        todolistAPI.createTask(todolistId, taskTitle)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input placeholder={'Todolist Id'} value={todolistId}
            onChange={(e)=>setTodolistId(e.currentTarget.value)}
            />
            <input placeholder={'Task Title'} value={taskTitle}
                   onChange={(e)=>setTaskTitle(e.currentTarget.value)}
            />
            <button onClick={createTask}>Create Task</button>
    </div>
    </div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [taskId, setTaskId] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')

    const deleteTask = () => {
        todolistAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input placeholder={'Todolist Id'} value={todolistId}
                   onChange={(e)=>setTodolistId(e.currentTarget.value)}
            />
            <input placeholder={'Task Id'} value={taskId}
                   onChange={(e)=>setTaskId(e.currentTarget.value)}
            />
            <button onClick={deleteTask}>Delete Task</button>
        </div>
    </div>
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState<string>('title 1')
    const [description, setDescription] = useState<string>('description 1')
    const [status, setStatus] = useState<number>(0)
    const [priority, setPriority] = useState<number>(0)
    const [startDate, setStartDate] = useState<string>('')
    const [deadline, setDeadline] = useState<string>('')
    const [todolistId, setTodolistId] = useState<string>('')
    const [taskId, setTaskId] = useState<string>('')

    const updateTask = () => {
        todolistAPI.updateTask(todolistId, taskId, {
            deadline: '',
            description: description,
            priority: priority,
            startDate: startDate,
            status: status,
            title: title
        })
            .then((res) => {
                setState(res.data)
            })
    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input placeholder={'Task Id'} value={taskId} onChange={(e)=>setTaskId(e.currentTarget.value)}/>
            <input placeholder={'Todolist Id'} value={todolistId} onChange={(e)=>setTodolistId(e.currentTarget.value)}/>
            <input placeholder={'Title'} value={title} onChange={(e)=>setTitle(e.currentTarget.value)}/>
            <input placeholder={'Description'} value={description} onChange={(e)=>setDescription(e.currentTarget.value)}/>
            <input placeholder={'Status'} value={status} type='number' onChange={(e)=>setStatus(+e.currentTarget.value)}/>
            <input placeholder={'Priority'} value={priority} type='number' onChange={(e)=>setPriority(+e.currentTarget.value)}/>
            <input placeholder={'Start Date'} value={startDate} onChange={(e)=>setStartDate(e.currentTarget.value)}/>
            <input placeholder={'Deadline'} value={deadline} onChange={(e)=>setDeadline(e.currentTarget.value)}/>
            <button onClick={updateTask}>Update Task</button>
        </div>
    </div>
}