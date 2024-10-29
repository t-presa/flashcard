function criaCartao(categoria, pergunta, resposta){
  let container = document.getElementById('container')
  let cartao = document.createElement('artical')
  cartao.className ='cartao'



  cartao.innerHTML = ` 
  
  <div class="cartao__conteudo">
    <h3>${categoria}</h3><p>
      <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
     </div> 
     <div class="cartao__conteudo__pergunta">
      <p>${resposta}</p>
  
  
     </div>
    <div>
  
      `
  
      let respostaEstaVisivel = false
  
      function viraCartao(){
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active',respostaEstaVisivel)
  }
  
  cartao.addEventListener('click',viraCartao)
  
  container.appendChild(cartao)
  
  }
  