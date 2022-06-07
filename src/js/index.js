// Ao clicar para enviar o formulário, se casoalgum campo não estiver preenchido, a bordado input deve ficar vermelha e uma mensagemde "campo obrigatório" deve aparecer embaixodo campo que não foi preenchido

const enviar = document.getElementById('btn')
const erro = document.querySelectorAll('.caixa')

enviar.addEventListener('click', function() {
  erro.forEach( function (e) {
    const inputVazio = e.querySelector('.input');

    if(inputVazio.value === ''){
      e.classList.remove('off')
      inputVazio.classList.add('borda')
      inputVazio.classList.remove('ok')
    }else {
      e.classList.add('off')
      inputVazio.classList.remove('borda')
      inputVazio.classList.add('ok')
    }
   
  })
})