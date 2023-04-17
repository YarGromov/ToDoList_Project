import axios from 'axios'
import {TaskType} from "../Todolist";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '9c4ffa8f-2b09-41e8-a62a-7e4b43a79ee7',
    },
})

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}


export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}

type GetTasksResponseType = {
    error: string |  null
    totalCount: number
    items: TaskType
}

type UpdateTaskModelType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: string
    deadline: string
}

export const todolistAPI = {

    getTodolists() {
        return instance.get<Array<TodolistType>>('todo-lists')
    },

    createTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>(
            'todo-lists',
            {title: title}
        )
    },

    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(
            `/todo-lists/${todolistId}`
        )
    },

    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType>(
            `todo-lists/${todolistId}`,
            {title: title}
        )
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponseType>(`/todo-lists/${todolistId}/tasks`)
    },
    createTask(todolistId: string, taskTitle: string) {
        return instance.post<ResponseType<TaskType>>(
            `todo-lists/${todolistId}/tasks`,
            {title: taskTitle}
        )
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId: string,taskId: string, model: UpdateTaskModelType){

    }
}
