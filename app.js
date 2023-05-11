let canvasSize = 16;
let squareBorder = 1;
let button = document.querySelector('button')
button.addEventListener('click',newSize)

function newSize() {
    canvasSize = prompt("How many squares across do you want?")
    container.replaceChildren()
    initializeCanvas();
}



const container = document.querySelector('.container')
const body = document.querySelector('body')
console.log(container)

function initializeCanvas () {
    for(let i=0; i<(canvasSize**2); i++) {

        let square = document.createElement('div')
        square.className = "square"
        square.style.width = `${(window.innerWidth-20)/canvasSize}px`
        square.style.height = square.style.width
        square.style.border = `solid black ${squareBorder}px`
        square.addEventListener('mouseover',(e)=> {
        e.target.style.background = 'black'
        })
        container.appendChild(square)
    }
}
initializeCanvas();



