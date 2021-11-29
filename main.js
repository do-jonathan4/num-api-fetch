let factInput = document.getElementById('factInput')
let factBtn = document.getElementById('factBtn')
let factDiv = document.getElementById('factDiv')
let factText = document.getElementById('factText')
let factRandom = document.getElementById('factRandom')

const sentHttpRequest = url => {
  return fetch(url)
    .then(res => res.text())
    .then(res => {
      factDiv.style.display = 'block'
      factText.innerText = res
    })
}

const getFact = () => {
  const fact = factInput.value
  if(isNaN(fact) || fact === '') return
  sentHttpRequest('http://numbersapi.com/' + fact)
}

const randomFact = () => {
  factInput.value = ''
  sentHttpRequest('http://numbersapi.com/random/trivia')
}

factInput.addEventListener('input', getFact)
factRandom.addEventListener('click', randomFact)
