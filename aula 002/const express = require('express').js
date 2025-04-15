const express = require('express')
const userService = require('./userService')

const app = express() 
app.use(express.json()) 


app.post("/users", async (req, res) => {
    try {
        const { nome, email, senha, endereco, telefone, cpf } = req.body 
        if (!nome || !email || !endereco || !senha || !telefone || !cpf) { 
            return res.status(400).json({ error: "Nome, email, endereço, senha, telefone e cpf são obrigatórios" }) 
        }
        const user = await userService.addUser(nome, email, senha, endereco, telefone, cpf)
        res.status(200).json({ user })
    } catch (erro) {
        res.status(400).json({ error: erro.message })
    }
})


app.get("/users", (req, res) => {
    res.json(userService.getUsers())
})

app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id) 
    try {
        const resultado = userService.deleteUser(id) 
        res.status(200).json(resultado) 
    } catch (erro) {
        res.status(404).json({ error: erro.message }) 
    }
})

app.put("/users/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const { nome, email, senha, endereco, telefone, } = req.body;
    try {
        const resultado = await userService.updateUser(id, nome, email, senha, endereco, telefone, cpf);
        if (!resultado) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        res.status(200).json(resultado);
    } catch (erro) {
        console.log("Erro ao atualizar o usuário", erro);
        res.status(500).json({ error: erro.message });
    }
});

const port = 3000
app.listen(port, () => {
    console.log("O servidor está rodando na porta: ", port)
})

const { query } = require('express');
const mysql = require('mysql');
const { resolve } = require('path');

const pool = mysql.createPool({
"User":"root",
"password":"root",
"database":"idev3",
"host":"localhost",
"port":"3307"

});

exports.execute = (query, param = [], varPool=pool) => {
    return new Promise((resolve, reject) => {
        varPool.query(query, param (error, results))
        if(error) {
            reject(error);
        }
        else {
            resolve(results);

        }
    })
}