const express = require('express')
const { geradorNome } = require('gerador-nome')
const db = require('./db')

const app = express()
const port = 3000

let name = geradorNome()

let createUserSql = `INSERT INTO users (name) VALUES ('${name}')`
db.query(createUserSql, (err, result) => {
    if (err) { throw err } 
})

let users = []
let getUsersSql = `SELECT name FROM users`
db.query(getUsersSql, (err, result) => {
    if (err) { throw err }

    result.forEach((e) => {
        users.push(e.name)
    })
})

app.get('/', (req, res) => {
    res.write("<h1>Full Cycle Rocks!</h1>")

    users.forEach((e, i) => {
        res.write(`<p>Nome ${i + 1}: ${e}</p>`)
    })
    
    res.end()
})

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
