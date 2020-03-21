let key = document.getElementById('key')
let code = document.getElementById('code')
let which = document.getElementById('which')

const keypress = e => {
  e.key === ' ' ? key.innerText = '(Space Character)' : key.innerText = e.key
  which.innerText = e.which
  code.innerText = e.code
}

document.addEventListener('keydown', (e) => {
  keypress(e)
})