function criaCartao(categoria, pergunta, resposta){
  let container = document.getElementById('container')
  let cartao = document.createElement('artical')
  cartao.className ='cartao'



  cartao.innerHTML = ` 
  

  <div class="cartao__conteudo">
  <h3 class="programacao">Geografia</h3>
  <div class="cartao__conteudo__pergunta">
  <p> Oque são continentes?</p> 
  </div>
  <div class="cartao__conteudo__resposta">
  <p> Os continentes são grandes extensões de terra emersas, limitadas pelas águas de mares e oceanos.</p>
  </div>
  </div>
  
  `
  container.appendChild(cartao)

}