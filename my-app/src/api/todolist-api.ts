import axios from 'axios'
import {CreateTodolist} from "../stories/todolists-api.stories";

const settings = {
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '9c4ffa8f-2b09-41e8-a62a-7e4b43a79ee7',
    },
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '9c4ffa8f-2b09-41e8-a62a-7e4b43a79ee7',
    },
})


export const todolistAPI = {

    getTodolists() {
        return  instance.get('todo-lists')
    },

    createTodolist(title: string) {
        return instance.post(
            'todo-lists',
            {title: title}
        )
    },

    deleteTodolist(todolistId: string) {
        return instance.delete(
            `/todo-lists/${todolistId}`
        )
    },

    updateTodolist(todolistId: string, title: string) {
        return instance.put(
            `todo-lists/${todolistId}`,
            {title: title}
        )
    }
}
