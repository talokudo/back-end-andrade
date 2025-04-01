const User = require ("./user");
const path = require('path'); //modulo para manipular caminhos
const fs = require('fs'); // modulo para manipular arquivos files system
const { json } = require("stream/consumers");

class userService{
    constructor(){
        this.filePath = path.join(__dirname, 'user.json');
        this.users = []; //Array para armazenar usuário
        this.nextId = 1; //contador para gerar id
    }

    loadUsers(){
        try{
        if(fs.existsSync(this.filePath)){//Verifica se o arquivo existe
            const data = fs.readFileSync(this.filePath);//Le o arquivo
            return JSON.parse(data);//transforma o json em objeto
        }
    }catch(erro){//Caso ocorra um erro
        console.log("Erro ao carregar arquivo", erro);
    }
    return[];
    }
    
    getNextId(){
        try{
        if(this.users.length===0) return 1;
            return Math.max(...this.users.map(user => user.id))+1;
        }catch(erro){//Caso ocorra um erro
            console.log("Erro ao carregar arquivo", erro);
        }
    }

    
saveUsers(){
    fs.writeFileSync(this.filePath, json.strigify(this.users));
}

        addUser(nome, email){
            try{
            const user = new User(this.nextId++, nome, email); //++ vai adicionar mais 1 no número do id a cada novo usuário, que inicialmente é 1.
            this.users.push(user)
            return user;
            }catch(erro){
                console.log("Erro", erro);z
            }
        }
        async addUser (nome, email, senha, endereco, telefone, cpf ) {
            try {
const senhacripto = await brcypt.hash(senha, 10);
const user = new user(this.nextId++, nome, email, senhacripto, endereco);
this.user.push(user);
this.saveUsers();
return user; 
            } catch (erro){
                console.log ('erro', erro);
            }
        }

        getUsers(){
            try{
            return this.users
            }catch(erro){
                console.log("Erro", erro);
            }
        }
        deleteUser(id){
            try{
                this.users = this.users.filter(user => user.id !== id);

            }catch{
                console.log('erro deletado', erro);
            }
        }
}

module.exports = new userService;



