import React from 'react';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
}

export function Todolist(props: PropsType) {

    const deleteButtonHandler = () =>{

    }

    return <div>
        <h3>{props.title}<button onClick={deleteButtonHandler}>x</button></h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                props.tasks.map((tl) => {
                        return (
                            <li key={tl.id}><input type="checkbox" checked={tl.isDone}/> <span>{tl.title}</span></li>
                        )
                    }
                )
            }
        </ul>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
}
