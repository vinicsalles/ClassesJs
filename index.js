class cachorros {
    constructor(nome, raca, idade, morde){
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
        this.morde = morde;
    }
}

const rotweiller = new cachorros("bob", "rotweiller", 20, true);

const bulldog = new cachorros('rochele', "bulldog", 10, false);

console.log(rotweiller)
console.log(bulldog)



class loja {
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    desconto(disconto){
        return this.preco / (disconto + 0.7)  ;
    }
}


const camisaPolo = new loja("Camisa Polo", 100)

console.log(camisaPolo.desconto(10).toFixed(2));

const camisaMalha = new loja("Camisa Malha", 20)


console.log(camisaMalha.desconto(1).toFixed(2))




