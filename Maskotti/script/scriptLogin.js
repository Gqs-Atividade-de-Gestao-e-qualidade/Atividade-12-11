var transfer = async(email) => {
    const db = require("./db")
    console.log('começou!')
    const [usuarios] = await db.selectCustomers(email)
    return usuarios
}


function enviar() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    window.location.href = 'vendas.html'
    transfer(email)
}




function show() {
    var arrest = document.getElementById("Password");
    if (arrest.type === "password") {
        arrest.type = "text";
    } else {
        arrest.type = "password";
    }
}