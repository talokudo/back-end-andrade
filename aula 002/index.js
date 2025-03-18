const express = require('express');
const userService = require('./userService');
const { error } = require('console');

const app = express();
app.use(express.json());

app.post("./users",(req, res)=>{
    const {nome, email} = req.body;
    if(!nome || !email){
        return res.status(400).json({error: "nome e email sãp obrigatorios!"})
    }

    const user = userService.addUser(nome, email);
    res.status(200).json({user});

});

app.get("/users", (req, res) => {
    res.json(userService.getUsers());
});

const port = 3000;
app.listen(port, ()=>{
    console.log("ta rodando na porta :)", port);
})

app.delete("/userers/:id", (req, res) => {
    const id =pareseInt(req.params.id);
} try {
    const resultado = userService.deleteUser(id);
}catch (erro) {
    res.status(404).json({error: erro.message});

})

const port = 3000;
app.listen(port,()=>{
    console.log("ta rodando", port);
});