function TableHeader() {
    return(
        <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Complete</th>
        </tr>
      </thead>
    )
}

const TableBody = (props) => {
    const rows = props.taskData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.title}</td>
          <td>{row.description}</td>
          <td>
            <button onClick={() => props.removeTask(row.description)}>Complete</button>
          </td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

function Table(props) {

    return(
        <table>
        <TableHeader/>
        <TableBody taskData={props.taskData} removeTask={props.removeTask}/>
        </table>
    )
}

export default Table