interface TaskProps{
    title: string,
    description: string
}

function Task({title, description}: TaskProps){

    return(
        <div className="flex flex-wrap flex-col gap-1">
            <h1 className="text-lg">{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Task