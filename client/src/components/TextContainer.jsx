import Table from './Table'
import Form from './Form'
import {useState, useEffect} from 'react'

function TextContainer() {

    const [tasks, setTasks] = useState([]);

    const handleComplete = (index) => {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
        deleteTask(index)
      }
    
      const handleSubmit = (task) => {
        const newTasks = [...tasks]
        newTasks.push(task)
        setTasks(newTasks)
        addTask(task)
      }

      const getTasks = async () => {
        try {
            const response = await fetch('/api/tasks')
            const data = await response.json()
            setTasks(data)
        } catch (error) {
            console.error(error)
        }
    }

    const addTask = async (task) => {
      try {
        const response = await fetch('/api/tasks', {
          method: 'POST',
          body: JSON.stringify(task),
          headers: {"Content-type": "application/json"}
        });
      } catch (error) {
        console.error(error);
      }
    }

    const deleteTask = async (id) => {
        try {
          await fetch(`/api/tasks/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({id}),
            headers: {"Content-type": "application/json"}
          });
        } catch (error) {
          console.error(error);
        }
      }

    useEffect(() => {
        getTasks()
      }, [])

    return(
        <div>
            <h1>My Digital To-Do List</h1>
            <p>Add a new task with a title and description!</p>
            <Table taskData={tasks} removeTask={handleComplete}/>
            <h1>Add New</h1>
            <Form submitTask={handleSubmit} />
        </div>
    )

}
export default TextContainer