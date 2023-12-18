const Pool = require('pg').Pool
const pool = new Pool({
    user: 'nick',
    host: 'localhost',
    database: 'tasksapi',
    password: '032702',
    port: 5432,
})

const getTasks = (req, res) => {
    pool.query('SELECT * FROM tasks ORDER BY id ASC', (error, result) => {
        if(error) {
            throw error
        }
        res.status(200).json(result.rows)
    })
}

const addTask = (req, res) => {
    const {title, description} = req.body

    pool.query('INSERT INTO tasks (title, description) VALUES ($1, $2)', [title, description], (error, result) => {
            if(error) {
                throw error
            }
            res.status(201).send(`Added tasks - ${title}: ${description}`)
        })
}

const completeTask = (req, res) => {
    const {title, description} = req.body

    pool.query('DELETE FROM tasks where title = $1 AND description = $2', [title, description], (error, result) => {
            if(error) {
                throw error
            }
            res.status(200).send(`Deleted task - ${title}: ${description}`)
        })
}

module.exports = {
    getTasks,
    addTask,
    completeTask
}