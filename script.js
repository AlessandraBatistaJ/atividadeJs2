// h1
const titulo = document.querySelector("#titulo")
console.log(titulo)
titulo.innerText = "Adicionando título com Js"

// ul
const elementoUl = document.querySelector("ul")
console.log(elementoUl)
elementoUl.innerHTML = `
    <li>Item 01</li>
    <li>Item 02</li>
    <li>Item 03</li>
`

// a
const elementoA = document.querySelector("a")
console.log(elementoA)
elementoA.innerText = "Adicionando texto ao link com Js"

// ol
const listaOrdenada = document.querySelector("#lista-ordenada")
console.log(listaOrdenada)
listaOrdenada.innerHTML = `
    <li><a href="https://talentocloud.joyclass.com/login">Link 01</a></li>
    <li><a href="https://www.w3schools.com/">Link 02</a></li>
    <li><a href="https://ricardo-reis.medium.com/objetos-javascript-e347adc3a8ac">Link 03</a></li>
`
