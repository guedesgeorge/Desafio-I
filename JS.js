// Aqui vamos perguntar ao usuario qual é o dia da semana //
var  diaDasemana = prompt("Qual é o dia da semana?");

// coverta as respostas para letras minusculas para tornar a comparação //
diaDasemana = diaDasemana.toLowerCase();

// verifica se é sabado ou domingo e exibe a mensagem apropriada //
if (diaDasemana === "sabado" ||  diaDasemana === "domingo") {
  alert("Bom fim de semana!");

}else{
  alert("Boa Semana!");
}
