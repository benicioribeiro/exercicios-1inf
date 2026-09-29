let cliente = "Diego Martins" 
let peca = "Camiseta Branca"
let preco = 50
let quantidade = 3
let estoque = 10
let valorPago = 200


//subtotal
let subtotal = preco * quantidade
   
//verifica estoque disponível
let estoqueDisponivel
if(quantidade <= estoque){
    estoqueDisponivel = "Estoque suficiente"
} else {
    estoqueDisponivel= "Estoque insuficiente"
}
//
let cupomStatus
 let valorCupom = 0

if (subtotal >= 200) {
    cupomStatus = "Cupom aplicado = 4"

}   else{ cupomStatus = "Sem cupom"

}

 let valorFinal = subtotal - valorCupom

let pagamentoStatus
 if (valorPago >= valorFinal) {
    pagamentoStatus = "Pagamento aprovado"

 }  else {
 pagamentoStatus = "Pagamento insuficiente"
 }

let troco = valorPago - valorFinal

let statusCompra = "aguardando"
if (estoqueDisponivel > 0 && pagamentoStatus ) {
   statusCompra = "Compra pendente de pagamento"
}   else {
    statusCompra = "Compra confirmada"
}

let resumo = `
  cliente: ${cliente}
peca: ${peca}
quantidade: ${quantidade}
estoque: ${estoque}
valorPago: ${valorPago}
subtotal: ${subtotal}
estoqueDisponivel: ${estoqueDisponivel}
cupomStatus: ${cupomStatus}
valorCupom: ${valorCupom}
valorFinal: ${valorFinal}
pagamentoStatus: ${pagamentoStatus}
troco: ${troco}
statusCompra: ${statusCompra}
`
console.log (resumo)

module.exports = {
    cliente,
    peca,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    cupomStatus,
    valorCupom,
    valorFinal,
    pagamentoStatus,
    troco,
    statusCompra,
    resumo
}
// CRIE SUA SOLUÇÃO ABAIXO ================
const nome = "❓"
const curso = "❓"
const escola = "❓"

const mensagem = `${❓} está estudando ${❓} na ${❓}.`

// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = mensagem