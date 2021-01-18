let custo = 160; //Custo compra do produto
let calculoImposto = custo * (20 / 100); //Calcula vaor do imposto sobre o custo
let valorCustoTotal = custo + calculoImposto; //Calcula custo total

let valorVenda = 500;
let lucro =  valorVenda - valorCustoTotal;

let qtdVenda = 1000
let lucroTotal = qtdVenda * lucro;

if (custo < 0 || valorVenda < 0 ||qtdVenda < 0 ){
    console.log("Nenhum dos valores pode ser menor que zero")
}else{
console.log("O Lucro total de vendas foi:", lucroTotal)
}



