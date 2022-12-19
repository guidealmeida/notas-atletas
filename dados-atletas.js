class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11)
            return "Infantil"
        if (this.idade >= 12 && this.idade <= 13)
            return "Juvenil"
        if (this.idade >= 14 && this.idade <= 15)
            return "Intermediário"
        if (this.idade >= 16 && this.idade <= 30)
            return "Adulto"
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura)
    }

    calculaMediaValida() {
        let soma = 0
        let media = 0
        let notas = this.notas.sort()
        let notasComputadas = notas.slice(1,4)
        
        notasComputadas.forEach(function(nota) {
            soma = soma + nota
        })
        media = soma / notasComputadas.length
        return media
    }

    obtemNomeAtleta(){
        return this.nome
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    } 
}

// Declara o atleta
const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.calculaCategoria());
console.log("IMC: " + atleta.calculaIMC());
console.log("Média válida: " + atleta.calculaMediaValida());

// Exemplo de Saída
// Nome: Cesar Abascal
// Idade: 30
// Peso: 80
// Altura: 1.7
// Notas: 10,9.34,8.42,10,7.88
// Categoria: Adulto
// IMC: 27.68166089965398
// Média válida: 8.766666666666666