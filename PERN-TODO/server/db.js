const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "g0valp0",
    host: "localhost",
    port: 5432,
    database: "todoapp_perntodo"
})

module.exports = pool;