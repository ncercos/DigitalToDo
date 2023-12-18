import { useState } from "react"

function Form(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }

    return(
        <form onSubmit={(event) => {
            event.preventDefault()
            props.submitTask({title, description})
        }}>
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" onChange={handleTitleChange}/>
            <br />
            <br />
            <label for="desc">Description:</label>
            <input type="text" id="desc" name="desc" onChange={handleDescriptionChange}/>
            <br/>
            <br />
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default Form