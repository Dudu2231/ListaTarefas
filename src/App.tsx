import {useRef, useState } from "react"
import {Button, Task} from "./components/Importations"

interface TasksModel{
  title: string,
  description: string,
  id: number
}

function App() {
  const [tasks, setTasks] = useState <TasksModel[]> ([]);
  const title =  useRef<HTMLInputElement | null>(null)
  const description =  useRef<HTMLTextAreaElement | null>(null)

  const addTask = ()=>{

    if (title.current!==null && description.current!==null){
      let taskTitle = title.current.value.trim()
      let taskDescription = description.current.value.trim()

      title.current.value = ""
      description.current.value = ""
      if (taskTitle && taskDescription){
        setTasks((prev)=> [...prev, {title: taskTitle, description: taskDescription, id: Date.now()}])
      }
    }
  }

  const removeTask = (id:number)=>{
    setTasks((prev)=> prev.filter((task)=> task.id!==id))
  }

  return (
      <div className="min-h-screen
                      flex flex-col
                      justify-center
                      items-center">
        <div className="p-5 bg-gray-100 shadow md:max-w-6/12">

        <header className="p-4 text-center">
          <h1 className="text-4xl md:text-6xl
                          underline
                       decoration-blue-600
                        decoration-dashed">Lista de Tarefas</h1>

          <p className="text-gray-800 mt-4">Anote suas metas do dia</p>
        </header>

        <main className="">

          <div className="flex flex-col gap-1">
            <label htmlFor="title">Titulo da tarefa</label>
            <input type="text" id="title" className="border" ref={title}/>
            <label htmlFor="description">Descrição:</label>
            <textarea id="description" className="border" ref={description}></textarea>
            <span className="self-center my-1">
              <Button color="#00d600" label="Adicionar" onClick={addTask}/>
            </span>
         </div>

          <div className="my-3 flex flex-col">
              {tasks.map((item)=> <Task doneFunc={()=> removeTask(item.id)} title={item.title} description={item.description}/>)}
          </div>
          
        </main>
        </div>

      </div>
  )
}

export default App
