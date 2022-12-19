let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

   function pontuacaoAtletas(atletas){
    
    atletas.forEach(function(atleta){
        console.log(`Atleta: ${atleta.nome}`)        
        let listaNotasOriginal = atleta.notas.join(",")
        console.log("Notas obtidas: " + listaNotasOriginal) 
        
        // acha a menor e maior notas
        let menor = 10
        let maior = 0
        for(let i = 0; i < atleta.notas.length; i++){
            if(atleta.notas[i] < menor){
                menor = atleta.notas[i]
            }
            if(atleta.notas[i] > maior){
                maior = atleta.notas[i]
            }
        }

        // soma e conta as notas válidas
        let soma = 0
        let qtdNotas = 0        
        for(let i = 0; i < atleta.notas.length; i++){            
            if(atleta.notas[i] != menor && atleta.notas[i] != maior){
                soma = soma + atleta.notas[i]
                qtdNotas = qtdNotas + 1                 
            }
        }
        
        let mediaValida = soma / qtdNotas
        console.log("Média Válida: " + mediaValida)
                
        console.log("")
})
}

pontuacaoAtletas(atletas)