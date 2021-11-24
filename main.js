
let factInput = document.getElementById('factInput')
let factBtn = document.getElementById('factBtn')
let factDiv = document.getElementById('factDiv')
let factText = document.getElementById('factText')
let factRandom = document.getElementById('factRandom')

function getFact() {
  let fact = factInput.value
  let xhr = new XMLHttpRequest()

  xhr.open('GET', 'http://numbersapi.com/'+fact)

  xhr.onload = function() {
    if (this.status === 200) {
      factDiv.style.display = 'block'
      factText.innerText = this.responseText
    }
  }

  xhr.send()
}

function randomFact() {
  factInput.value = ''
  let xhr = new XMLHttpRequest()

  xhr.open('GET', 'http://numbersapi.com/random/trivia')

  xhr.onload = function () {
    factDiv.style.display = 'block'
    factText.innerText = this.responseText
  }

  xhr.send()
}

factInput.addEventListener('input', getFact)
factRandom.addEventListener('click', randomFact)
