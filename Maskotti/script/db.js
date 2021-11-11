async function connect() {
    if (global.connection && global.connection.state !== 'disconnected')
        return global.connection

    const mysql = require("mysql2/promise")
    const user = "root"
    const senha = "090776"
    const schema = "maskotti"
    const connection = await mysql.createConnection("mysql://root:090776@localhost:3306/maskotti")
    console.log(`mysql://${user}:${senha}@localhost:3306/${schema}`)

    console.log("Conectou no mysql")
    global.connection = connection;

    return connection
}


async function selectCustomers(email) {
    const conn = await connect()

    return await conn.query(`SELECT email FROM usuarios WHERE email = '${email}' ;`)
}

async function insertCustomers(customer) {
    const conn = await connect();
    const sql = 'INSERT INTO usuarios(nome, cpf, email, senha, endereco, telefone) VALUES(?, ?, ?, ?, ?, ?);'
    const values = [customer.nome, customer.cpf, customer.email, customer.password, customer.endereco, customer.telefone];
    return await conn.query(sql, values);
}

module.exports = { selectCustomers, insertCustomers }