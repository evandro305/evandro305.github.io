let maximo = 50;
let numeroCorreto = Math.floor(Math.random() * maximo) + 1;
console.log(numeroCorreto);
let ultimoPalpiteFoiMaior = false;
let ultimoPalpiteFoiMenor = false;
let primeiraTentativa = true;
let numerosJaTentados = [];
while (true) {
let mensagem = "";
if (primeiraTentativa){
mensagem += "Eu pensei em um número entre 1 e " + maximo +". Você consegue adivinhar qual numero é esse?\n\n";}
if (ultimoPalpiteFoiMaior) {
mensagem += "Tente um número menor.\n";}
if (ultimoPalpiteFoiMenor){
mensagem += "Tente um número maior.\n";}
mensagem += "Números já tentados: " + numerosJaTentados + "\n";
ultimoPalpiteFoiMaior = false;
ultimoPalpiteFoiMenor = false;
mensagem += "Digite um palpite ou digite 'sair' para encerrar";
let palpite = prompt(mensagem);
if (palpite == numeroCorreto){
alert("Parabéns, você venceu!!!");
break;
} else if (palpite == "sair"){
alert("Você encerrou o jogo.");
break;
} else if (palpite == null) {
alert("Palpite não identificado. Encerrando.");
break;
} else if (Number(palpite) < numeroCorreto) {
ultimoPalpiteFoiMenor = true;
} else if (Number(palpite) > numeroCorreto) {
ultimoPalpiteFoiMaior = true;}
primeiraTentativa = false;
numerosJaTentados.push(palpite);}