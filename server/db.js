const Pool = require('pg').Pool
const pool = new Pool({
    user: 'nick',
    host: 'localhost',
    database: 'tasksapi',
    password: '032702',
    port: 5432,
})

// TODO: the methods to get info from the db

module.exports = {}