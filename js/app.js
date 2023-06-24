const input1 = document.querySelector("#color1")
const input2 = document.querySelector("#color2")
const inputChiziq = document.querySelector("#chiziq")
let body = document.querySelector("body")
let gradus = document.querySelector('#gradus')
let rang1 = document.querySelector('#rang1')
let rang2 = document.querySelector('#rang2')

input1.addEventListener("input", active)
input2.addEventListener("input", active)
inputChiziq.addEventListener("input", active)

function active() {
  body.style.backgroundImage = `linear-gradient(${inputChiziq.value}deg, ${input1.value}, ${input2.value})`;
  gradus.textContent = inputChiziq.value
  rang1.textContent = input1.value
  rang2.textContent = input2.value
}