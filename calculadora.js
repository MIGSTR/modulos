var somar = require("./modulos/somar");
var media = require("./modulos/media");
var multiplicar = require("./modulos/multiplicar");
var dividir = require("./modulos/dividir");
var mensagem = require("./modulos/mensagem");
var nome = "Miguel";
var sendmensagem = "É us guri do html!! Ass: ";

console.log("A soma de x e y é: " + somar(20,90));
console.log("A média de x e y é: " + media(20,90));
console.log("A multiplicação de x e y é: " + multiplicar(20,90))
console.log("A divisão de x e y é: " + dividir(20,90))
console.log(mensagem(nome,sendmensagem))