// CRIE SUA SOLUÇÃO ABAIXO ================
let cliente = "Mariana Silva"
let cidade = "Fortaleza"
let produto = "Notebook Pro" 
let categoria = "Notebook"
let preco = 3500
let quantidade = 2
let descontoPercentual = 10
let valorPago = 7000

let subtotal = preco  * quantidade
let valorDesconto = subtotal * descontoPercentual/100
let valorFinal = subtotal - valorDesconto
let troco = valorPago - valorFinal

let resumo =  ` 
cliente, ${cliente}
  cidade, ${cidade}
  produto, ${produto}
  categoria, ${categoria}
  preco, ${preco}
  quantidade, ${quantidade}
  descontoPercentual, ${descontoPercentual}
  valorPago, ${valorPago}
  subtotal, ${subtotal}
  valorDesconto, ${valorDesconto}
  valorFinal, R$ ${valorFinal}
  troco, R$ ${troco}
  
  `
console.log(resumo)




// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = {
  cliente,
  cidade,
  produto,
  categoria,
  preco,
  quantidade,
  descontoPercentual,
  valorPago,
  subtotal,
  valorDesconto,
  valorFinal,
  troco,
  resumo,
}