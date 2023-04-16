import axios from 'axios'

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

type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {
        item: TodolistType
    }
}

type UpdateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}

type DeleteTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}

export const todolistAPI = {

    getTodolists() {
        return  instance.get<Array<TodolistType>>('todo-lists')
    },

    createTodolist(title: string) {
        return instance.post<CreateTodolistResponseType>(
            'todo-lists',
            {title: title}
        )
    },

    deleteTodolist(todolistId: string) {
        return instance.delete<DeleteTodolistResponseType>(
            `/todo-lists/${todolistId}`
        )
    },

    updateTodolist(todolistId: string, title: string) {
        return instance.put<UpdateTodolistResponseType>(
            `todo-lists/${todolistId}`,
            {title: title}
        )
    }
}
