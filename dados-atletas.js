class Atleta {
    constructor(nome, idade, peso, altura, anotacoes) {
        this.nomeAtleta = nome;
        this.idadeAtleta = idade;
        this.pesoAtleta = peso;
        this.alturaAtleta = altura;
        this.notasAtleta = anotacoes;
    }
    calculaCategoria() {
        if(this.idadeAtleta >= 9 && this.idadeAtleta <= 11){
            this.categoriaAtleta = "Infantil";
        }
        else if(this.idadeAtleta === 12 || this.idadeAtleta === 13) {
            this.categoriaAtleta = "Juvenil";
        }
        else if(this.idadeAtleta === 14 || this.idadeAtleta === 15) {
            this.categoriaAtleta = "Intermediário";
        }
        else if(this.idadeAtleta >= 16 && this.idadeAtleta <= 30) {
            this.categoriaAtleta = "Adulto";
        }
        else {
            this.categoriaAtleta = "Sem categoria";
        }
    }
    calculaIMC() {
        this.atletaIMC = this.pesoAtleta/(this.alturaAtleta*this.alturaAtleta);
    }
    calculaMediaValida() {
        let notasOrdenadas = this.notasAtleta.sort((b, a) => a - b);
        let notasValidas = notasOrdenadas.slice(1,4);
        let somaNotasValidas = notasValidas.reduce(function(total, atual){
            return total+=atual;
        }, 0);
        this.mediaValida = somaNotasValidas/notasValidas.length;
    }
    obtemNomeAtleta() {
        console.log(`Nome: ${this.nomeAtleta}`);
    }
    obtemIdadeAtleta() {
        console.log(`Idade: ${this.idadeAtleta}`);
    }
    obtemPesoAtleta() {
        console.log(`Peso: ${this.pesoAtleta}`);
    }
    obtemAlturaAtleta() {
        console.log(`Altura: ${this.alturaAtleta}`);
    }
    obtemNotasAtleta() {
        console.log(`Notas: ${this.notasAtleta}`);
    }
    obtemCategoria() {
        console.log(`Categoria: ${this.categoriaAtleta}`);
    }
    obtemIMC() {
        console.log(`IMC: ${this.atletaIMC}`);
    }
    obtemMediaValida() {
        console.log(`Média Válida: ${this.mediaValida}`);
        console.log("-----------");
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

atleta.obtemNomeAtleta();
atleta.obtemIdadeAtleta();
atleta.obtemPesoAtleta();
atleta.obtemAlturaAtleta();
atleta.obtemNotasAtleta();
atleta.calculaCategoria();
atleta.obtemCategoria();
atleta.calculaIMC();
atleta.obtemIMC();
atleta.calculaMediaValida();
atleta.obtemMediaValida();
