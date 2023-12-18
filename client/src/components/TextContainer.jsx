import Table from './Table'
import Form from './Form'
import {useState} from 'react'

function TextContainer() {

    const [tasks, setTasks] = useState([]);

    const handleRemove = (index) => {
        const newTasks = [...tasks]
        newTasks.splice(index, 1)
        setTasks(newTasks)
      }
    
      const handleSubmit = (task) => {
        const newTasks = [...tasks]
        newTasks.push(task)
        setTasks(newTasks)
      }

    return(
        <div>
            <h1>My Digital To-Do List</h1>
            <p>Add a new task with a title and description!</p>
            <Table taskData={tasks} removeTask={handleRemove}/>
            <h1>Add New</h1>
            <Form submitTask={handleSubmit} />
        </div>
    )

}
export default TextContainer