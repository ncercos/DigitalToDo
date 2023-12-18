function TableHeader() {
    return(
        <thead>
        <tr>
          <th className='center'>Title</th>
          <th className='center'>Description</th>
          <th className='center'>Complete</th>
        </tr>
      </thead>
    )
}

const TableBody = (props) => {
    const rows = props.taskData.map((row, index) => {
      return (
        <tr key={index}>
          <td className='center'>{row.title}</td>
          <td className='center'>{row.description}</td>
          <td>
            <button className='center' onClick={() => props.removeTask(index)}>Complete</button>
          </td>
        </tr>
      )
    })
  
    return <tbody className='center'>{rows}</tbody>
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