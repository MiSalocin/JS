/*
 Tipo var pode ser editado/lido fora do escopo de sua criação
 Ela também pode ser lida antes de sua "criação", mas o valor será indefinido
 O conceito explicado na linha 3 se chama Hoisting
*/
console.log(clima)

{
    var clima = 42;
    clima = "quente"
}

console.log(clima)


/*
 Tipo let e const existem somente no escopo local
 não só isso, mas deve ser definida antes da utilização
*/
console.log(clima)
let tempo

{
    tempo = 42;
}
console.log(tempo)


/*
 Tipo const não pode ser alterado
 as regras dde utilização são iguais as do let
*/
const variação = "3º"
console.log(variação)