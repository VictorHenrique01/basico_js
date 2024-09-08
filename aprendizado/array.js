let dados = [
    {
        "nome" : "Victor",
        "materias" : ["pt", "en", "mat"],
        "medias" : [8,6,10]
    },
    {
        "nome" : "Henrique",
        "materias" : ["geo", "pt", "en"],
        "medias" : 8
    }
]

let media = dados[0].medias
let soma = 0 

for(var i = 0; i < media.length; i++){
    soma += media[i]
}

console.log(soma/media.length)