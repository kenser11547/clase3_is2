/*function funcionClic(){
        alert("click sobre boton")
}*/


const button = document.querySelector('button')

const funcionClic = () => {
    console.log("HICIERON CLICK SOBRE MI")
}
const funcionEnter = () => {
    console.log("EL MOUSE ENTRO")
}
const funcionSalir = () => {
    console.log("EL MOUSE salio")
}

/*button.onclick = funcionClic*/


//button.addEventListener('click', funcionClic)
//button.addEventListener('mouseenter', funcionEnter)
//button.addEventListener('mouseleave', funcionSalir)
//div.addEventListener('mouseenter', funcionEnter)


/*document.addEventListener('DOMContentLoaded', () => {
    console.log('ya se cargo el documento')
})
*/
//const randomColor = (number) => {
//    return Math.random() * number + 1
//} 
const randomColor =(number) => {
    return Math.floor (Math.random() * number + 1)
}

button.addEventListener('click', (e) => {
    console.log(e)
    document.body.style.backgroundColor = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})
`})