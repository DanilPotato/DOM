// 1
const button = document.getElementById('myButton')
const input = document.getElementById('myInput')

button.addEventListener('click', function () {
	button.textContent = input.value
})

// 2

const image = document.getElementById('myImage')
image.src = '../img/image.jpg'

// 3

const link = document.getElementById('myLink')
const image = document.getElementById('mySecondImage')

link.href = 'https://gptonline.ai/ru/'
image.alt = 'Зображення 2'

// 4

const firstItem = document.querySelector('#myList li:first-child')
firstItem.textContent = 'Новий текст для першого елемента'
