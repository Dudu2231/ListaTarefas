import { useId } from "react"
import {Button} from "./Importations"

interface TaskProps{
    title: string,
    description: string
}

function Task({title, description}: TaskProps){
    const id = useId()

    return(
        <div key={id} className="mb-1.5 flex wrap-anywhere flex-col bg-gray-200 p-4">
                <h1 className="text-xl font-semibold">{title}</h1>
                <p className="text-lg">{description}</p>
                <Button color="#428bbe" label="Feito" onClick={()=> 1} key={title}/>
        </div>
    )
}

export default Task