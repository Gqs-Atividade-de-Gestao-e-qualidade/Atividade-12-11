var transfer = async(nome, cpf, email, password, endereco, telefone) => {
    //const db = require("./db")
    console.log('começou!')
    console.log('Insert')
    const usuarios = await db.insertCustomers(({ nome: nome, cpf: cpf, email: email, password: password, endereco: endereco, telefone: telefone }))
    console.log(usuarios)
}

function enviar() {
    /*var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var endereco = document.getElementById("endereco").value;
    var telefone = document.getElementById("telefone").value;*/
    var nome = "jamir";
    var cpf = "13912811601";
    var email = "jamirmelo7@gmail.com";
    var password = "090776";
    var endereco = "rua baco 365";
    var telefone = "31982693558";

    transfer(nome, cpf, email, password, endereco, telefone)
    window.location.href = 'login.html'
}