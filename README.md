//classe base user
class usuario {
    constructor( nome, email, senha){
        this.nome = nome;
        this.email = email;
        this._senha = senha;
    }
    autenticar(senha){
        return senha ==this._senha
    }
    autenticar(senha){
        this._ = novasenha
    }

}
const usuario1 = new usuario('luiaz', 'lulocadamaloka@gmail,com', "14007")
console.log(usuario1.autenticar('14007'));
console.log(usuario1.autenticar('140007'));


class admin extends usuario{
    constructor(nome,email, senha, nivelacesso){
        super(nome, email, senha);
        this.nivelacesso = nivelacesso;
    
    }
baniruser(usuario){
    console.log(`${usuario.nome}foi banido pelo adm jamal babal ${this.nome}`);
}
autenticar(senha){
    return senha === this._senha && this.nivelacesso ===  'alto';
}

}
const usuario = new usuario ('ralu', 'lulocadamaloka@gmail,com', '14007' );
const usuario = new usuario ('jaca', 'ljacacadamaloka@gmail,com', '1407' );g
