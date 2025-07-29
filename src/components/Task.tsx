import { useId } from "react"
import {Button} from "./Importations"

interface TaskProps{
    title: string,
    description: string,
    doneFunc: ()=> void
}

function Task({title, description, doneFunc}: TaskProps){
    const id = useId()

    return(
        <div key={id} className="mb-1.5 flex wrap-anywhere flex-col bg-gray-200 p-4">
                <h1 className="text-xl font-semibold">{title}</h1>
                <p className="text-lg">{description}</p>
                <Button color="#428bbe" label="Feito" onClick={doneFunc} key={title}/>
        </div>
    )
}

export default Task