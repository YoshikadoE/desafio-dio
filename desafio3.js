class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome,
        this.idade = idade,
        this.tipo ={ 0:["guerreiro", "espada"],
                     1:["mago", "magia"],
                     2:["monge", "artes marciais"],
                     3:["ninja" , "shuriken"]
        }
    }
}

function attack(heroi){
    for(let index in heroi.tipo){
        let [tipoClasse,tipoAtaque] = heroi.tipo[index]
        console.log(`O ${tipoClasse} ${heroi.nome} atacou usando ${tipoAtaque}`)
    }
}

const jogador = new heroi("Erick", 33)

attack(jogador)