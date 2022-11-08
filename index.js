const colorcode = document.querySelector('.color-code')
const code = document.querySelector('.code')
const button = document.querySelector('.btn')


const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

button.addEventListener('click', function () {
    let colorChanger = '#'

    for (let i = 0; i < 6; i++) {
        colorChanger += colors[changeBackground()]
    }
    code.textContent = colorChanger
    document.body.style.backgroundColor = colorChanger

        
})

const changeBackground = () => {
   return Math.floor(Math.random() * colors.length)
}