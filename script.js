const app = document.getElementById('root');

const logo = document.createElement('img')
logo.src = "logo.png"

const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(logo)
app.appendChild(container)
var request = new XMLHttpRequest()

// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

// request.onload = function() {
// 	if (request.status >= 200 && request.status < 400) {
// 		var data = JSON.parse(this.response)
// 		data.forEach(movie => {
// 			const card = document.createElement('div')
// 			card.setAttribute('class', 'card')
			
// 			const h1 = document.createElement('h1')
// 			h1.textContent = movie.title
			
// 			const p = document.createElement('p')
// 			p.textContent = movie.description

// 			container.appendChild(card)

// 			card.appendChild(h1)
// 			card.appendChild(p)
// 		})
// 	}	else {
// 		const errorMessage = document.createElement('marquee')
// 		errorMessage.textContent = 'Its not working :('
// 		app.appendChild(errorMessage)
// 	} 
// }
// request.send()

fetch('https://ghibliapi.herokuapp.com/films')
	.then(response =>  response.json())
	.then(data => {
				data.forEach(movie => {
			const card = document.createElement('div')
			card.setAttribute('class', 'card')
			
			const h1 = document.createElement('h1')
			h1.textContent = movie.title
			
			const p = document.createElement('p')
			p.textContent = movie.description

			container.appendChild(card)

			card.appendChild(h1)
			card.appendChild(p)
		})
	})
	.catch(err => {
		const errorMessage = document.createElement('marquee')
		errorMessage.textContent = 'Not working :('
		app.appendChild(errorMessage)
	})