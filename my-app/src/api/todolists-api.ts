import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "7c0ff3f2-50e2-452e-8c2b-6bbac9b9cb6b"
    }
}

export const todolistsAPI = {
    getTodolist(){
      const promise =  axios
          .get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
        return promise;
    },
    createTodolist(title: string){
        const promise = axios
            .post("https://social-network.samuraijs.com/api/1.1/todo-lists",
                {title: title},
                settings)
        return promise;
    },
    deleteTodolist(id: string){
       const promise = axios
            .delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`,
                settings)
        return promise
    },
    updateTodolist(id: string, title: string){
        const promise =  axios
            .put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`,
                {title: title},
                settings)
        return promise
    }
}