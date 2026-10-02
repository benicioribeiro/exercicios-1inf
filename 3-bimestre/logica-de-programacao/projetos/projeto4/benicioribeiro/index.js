// CRIE SUA SOLUÇÃO ABAIXO ================
const opcao = 2
const subtotal = 120

// Parte 1
let prato = "Opção inválida"

switch (opcao) {

  case 1:
    prato = "Hambúrguer"
    break

  case 2:
    prato = "Pizza"
    break

  case 3:
    prato = "Suco"
    break

  default:
    prato = "Opção inválida"
}
console.log(opcao)

// Parte 2
const frete =
  subtotal >= 100 ? "Frete grátis":"Frete pago"
console.log(frete)
// === FIM DO CÓDIGO =======================
// === NÃO FAZER NADA ABAIXO DESSA LINHA ===
module.exports = { prato, frete }
