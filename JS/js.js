
const pares =document.querySelectorAll('.par')
const impares = document.querySelectorAll('.impar')
const cuerpo = document.querySelector('.cuerpo')
const form= document.querySelector('.form')
const boton1= document.querySelector('.pares')
const boton2 = document.querySelector('.impares')

const cambiarBoton2=()=>{
    cuerpo.classList.add("estilo1_1")
    form.classList.add("estilo1_2")
    for (let i of impares) {
        i.classList.add("estilo1_3")
    }
    for (let i of pares) {
        i.classList.add("estilo1_4")
    }

}
const cambiarBoton1=()=>{
    cuerpo.classList.remove("estilo1_1")
    form.classList.remove("estilo1_2")
    for (let i of impares) {
        i.classList.remove("estilo1_3")
    }
    for (let i of pares) {
        i.classList.remove("estilo1_4")
    }

}
boton1.addEventListener('click', cambiarBoton1)
boton2.addEventListener('click', cambiarBoton2)
