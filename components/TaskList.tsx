import React from "react";
import {Task, useDeleteTaskMutation} from "../generated/graphql-frontend";
import Link from 'next/link'

interface Props{
    tasks: Task[],
    onSuccess: () => void
}

type TaskInputType = {
    id: number
}
const TaskList: React.FC<Props> = ({tasks, onSuccess}) => {

    const [deleteTask, {loading, error}] = useDeleteTaskMutation({
        onCompleted: () => {
            onSuccess()
        }
    })

    const deleteHandler = async (input: TaskInputType) => {
        const id = input.id;

        try{
            const result = await deleteTask({variables: {id}})
        }catch(e){
            console.warn(e.graphQLErrors)
        }
    }


    return (
        <ul className="task-list">
            {tasks.map( (task) => {
                return <li className="task-list-item" key={task.id}>
                <Link href="/update/[id]" as={`/update/${task.id}`}>
                    <a className="task-list-item-title">{task.title}({task.status})</a>
                </Link>
                <button onClick={() => deleteHandler({id:task.id})}>DELETE x THIS</button>
                </li>
            })}
        </ul>
    )
}

export default TaskList