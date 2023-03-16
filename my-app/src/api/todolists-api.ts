import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "7c0ff3f2-50e2-452e-8c2b-6bbac9b9cb6b"
    }
}

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    ...settings
})

export type TodolistType = {
    id: string
    type: string
    addedDate: string
    order: number
}


export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

export type UpdateTaskModelType = {
    title: string
    description: string
    status: number
    priority: number
    startDate: string
    deadline: string
}

export type GetTaskResponse = {
    error: string | null
    totalCount: number
    items: TaskType[]
}


export const todolistsAPI = {
    getTodolist(){
      const promise =  instance
          .get<Array<TodolistType>>("todo-lists")
        return promise;
    },
    createTodolist(title: string){
        const promise = instance
            .post<ResponseType<{item: TodolistType}>>("todo-lists", {title: title})
        return promise;
    },
    deleteTodolist(id: string){
       const promise = instance
            .delete<ResponseType>(`todo-lists/${id}`)
        return promise
    },
    updateTodolist(id: string, title: string){
        const promise =  instance
            .put<ResponseType>(`todo-lists/${id}`,{title: title})
        return promise
    },
    getTasks(todolistId: string){
        return instance.get<GetTaskResponse>(`todo-lists/${todolistId}/tasks`)
    },
    deleteTasks(todolistId: string, taskId: string){
        return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTasks(todolistId: string, taskId: string, model: UpdateTaskModelType) {

    }
}