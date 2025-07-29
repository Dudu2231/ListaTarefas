import { useId, useRef, useState } from "react"
import Button from "./components/Button" 
import Task from "./components/Task"

interface TasksModel{
  title: string,
  description: string
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
      
      setTasks((prev)=> [...prev, {title: taskTitle, description: taskDescription}])
    }
  }

  return (
      <div className="min-h-screen
                      bg-gray-200
                      flex flex-col
                      justify-center
                      items-center">
        
        <div className="p-5 border-rose-200 border">

        <header className="p-4 text-center">
          <h1 className="text-xl md:text-4xl
                          underline
                       decoration-blue-600
                        decoration-dashed">Lista de Tarefas</h1>

          <p className="text-gray-700">Anote suas metas do dia</p>
        </header>

        <main className="">

          <div className="flex flex-col gap-1">
            <label htmlFor="title">Titulo da tarefa</label>
            <input type="text" id="title" className="border" ref={title}/>
            <label htmlFor="description">Descrição:</label>
            <textarea id="description" className="border" ref={description}></textarea>
            <span className="self-center my-1">
              <Button color="#00c01f" label="Adicionar" onClick={addTask}/>
            </span>
         </div>

          <div className="my-3">
              {tasks.map((item)=> <Task title={item.title} description={item.description}/> )}
          </div>
          
        </main>
        </div>

      </div>
  )
}

export default App
