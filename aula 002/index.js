const express = require('express');
const userService = require('./userService');
const { error } = require('console');

const app = express();
app.use(express.json());

app.post("/users", (req, res) => {
    const { nome, email } = req.body;
    if (!nome || !email) {
        return res.status(400).json({ error: "nome e email são obrigatórios!" });
    }

    const user = userService.addUser(nome, email);
    res.status(200).json({ user });
});

app.get("/users", (req, res) => {
    res.json(userService.getUsers());
});

app.delete("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const resultado = userService.deleteUser(id);
        res.status(200).json({ resultado });
    } catch (erro) {
        res.status(404).json({ error: erro.message });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log("ta rodando na porta :)", port);
});