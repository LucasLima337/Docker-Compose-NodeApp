const mysql = require('mysql')

let con = mysql.createConnection({
    database: "nodedb",
    host: "db",
    user: "root",
    password: "root",
    port: 3306
})

con.connect((err) => {
    if (err) throw err

    console.log("DB Connected!")
})

let sql = `
    CREATE TABLE users (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(255),
        PRIMARY KEY (id)
    )
`

con.query(sql, (err) => {
    if (err.code == "ER_TABLE_EXISTS_ERROR") {
        console.log('Table Already Created!')
    } else if (err) {
        throw err
    } else {
        console.log("Table Created!")
    }
})

module.exports = con
