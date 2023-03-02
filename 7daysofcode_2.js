const nome = document.querySelector('#nome');
const idade = document.querySelector('#idade');
const linguagem = document.querySelector('#linguagem');
const botao = document.querySelector('.botao');

botao.onclick = function(){
    alert(`Olá ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${linguagem.value}!`);
    let resposta = prompt(`Você gosta de estudar ${linguagem.value}? Responda com o número 1 para SIM ou 2 para NÃO.`);

    if(resposta == 1){
        alert('Muito bom! Continue estudando e você terá muito sucesso.');
    }
    else if(resposta == 2){
        alert('Ahh que pena... Já tentou aprender outras linguagens?');
    }
    else{
        alert('Resposta Inválida');
    }
}