import { useId } from "react"

interface TaskProps{
    title: string,
    description: string
}

function Task({title, description}: TaskProps){
    const id = useId()

    return(
        <div key={id} className="flex wrap-anywhere flex-col gap-1 bg-gray-200 p-4">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-lg">{description}</p>
        </div>
    )
}

export default Task