let factInput = document.getElementById('factInput')
let factBtn = document.getElementById('factBtn')
let factDiv = document.getElementById('factDiv')
let factText = document.getElementById('factText')
let factRandom = document.getElementById('factRandom')

const sentHttpRequest = (method, url) => {
  let fact = factInput.value
  let xhr = new XMLHttpRequest()

  xhr.open(method, url)

  xhr.onload = () => {
    if (xhr.status === 200) {
      factDiv.style.display = 'block'
      factText.innerText = xhr.response
    }
  }

  xhr.send()
}
const getFact = () => {
  const fact = factInput.value
  if(isNaN(fact) || fact === '') return
  sentHttpRequest('GET', 'http://numbersapi.com/' + fact)
}

const randomFact = () => {
  factInput.value = ''
  sentHttpRequest('GET', 'http://numbersapi.com/random/trivia')
}

factInput.addEventListener('input', getFact)
factRandom.addEventListener('click', randomFact)
