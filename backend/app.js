const cors = require('cors')
const express = require('express')
const mysql = require('mysql2/promise')

const app = express()
app.use(cors())

app.get('/status', async (req, res) => {
    // try {
    //     const connection = await mysql.createConnection({
    //         host: process.env['DB_HOST'],
    //         user: process.env['DB_USER'],
    //         password: process.env['DB_PASSWORD'],
    //         database: process.env['DB_DATABASE'],
    //     });

    //     const [ results, fields ] = await connection.query(`
    //         SELECT * FROM Status LIMIT 1
    //     `)

    //     res.send({
    //         status: results[0]['status'],
    //     })
    // } catch (e) {
    //     console.error(e.message)
    //     res.send({
    //         status: 'Database error...',
    //     })
    // }

    res.send({
        status: 'Hello world!',
    })
})

app.listen(process.env['PORT'] ?? 8081)
