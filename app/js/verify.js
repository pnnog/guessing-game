function reloadButton() {
  const button = document.createElement('button')
  button.classList.add('btn-reload')
  button.innerHTML = 'Jogar de novo'


  button.onclick = (e) => {
    e.preventDefault()
    window.location.reload(false)
  }
  return button
}

function sucess (number) {

  const msg = `<h1> Você acertou!</h1> <p> você acertou! O número sorteado foi ${number}.</p>`
  
  document.body.innerHTML= msg
  document.body.appendChild(reloadButton())
}

function error (itsBigger){
  shotBox.innerHTML += itsBigger
}

function itsBigger(number, shot) {
  return number > shot ?
  `<p>O número secreto é <span id="tip">maior</span> <i id="icon" class="fa-solid fa-arrow-up-long"></i>
  </p>` 
  :
  `<p>
  O número secreto é <span id="tip">menor</span>
  <i class="fa-solid fa-arrow-down-long"></i>
  </p>` 
}

function resultVerify(number, shot) {
  shot === number? sucess(shot) : error(itsBigger(number,shot)) 
}

function validation(shot) {
  if(isNaN(shot)){
    shotBox.innerHTML += '<p> Valor inválido </p>'

  }

  else if (shot < 1 || shot > 100){
    shotBox.innerHTML += '<p> O valor do chute deve estar entre 1 e 100 </p>'

  }

  else{
    return true
  }
 
}






























