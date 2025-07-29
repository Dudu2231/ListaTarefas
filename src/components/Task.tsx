interface TaskProps{
    title: string,
    description: string
}

function Task({title, description}: TaskProps){

    return(
        <div className="flex flex-wrap flex-col gap-1">
            <h1 className="text-xl">{title}</h1>
            <p className="text-lg">{description}</p>
        </div>
    )
}

export default Task