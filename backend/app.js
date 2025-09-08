const express = require('express')
const mysql = require('mysql2/promise')

const app = express();

app.get('/status', async (req, res) => {
    const connection = await mysql.createConnection({
        host: process.env['DB_HOST'],
        user: process.env['DB_USER'],
        password: process.env['DB_PASSWORD'],
        database: process.env['DB_DATABASE'],
    });

    const [ results, fields ] = await connection.query(`
        SELECT * FROM Status LIMIT 1
    `)

    res.send({
        status: results[0]['status'],
    })
})

app.listen(process.env['PORT'] ?? 8081);
