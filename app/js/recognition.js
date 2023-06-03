const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
const SpeechRecognitionEvent =
  window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

const recognition =  new SpeechRecognition();
recognition.lang = 'pt-BR'

const number = getNumber()
const shotBox = document.getElementById('shot-box')


function render(shot) {
  shotBox.innerHTML =  
  ` <h2>Você disse:</h2><p id="shot" class="shot">${shot}</p>`
}

function onSpeak(e) {
  e.preventDefault();

  const shot =  e.results[0][0].transcript
  render(shot)
  !!validation(shot) && resultVerify(number, parseInt(shot))
}


recognition.start()
recognition.addEventListener('result', onSpeak)
recognition.addEventListener('end', ()=>{
  recognition.start()
})

