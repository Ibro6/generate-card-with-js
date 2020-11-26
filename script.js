let = bodyElement = document.body;
// Creating elments
let cardElement = document.createElement('div');
let imageContainer = document.createElement('div');
let imageElement = document.createElement('img');
let infoContainer = document.createElement('div');
let headingElement = document.createElement('h5');
let paragraphElement = document.createElement('p');
let btnElement = document.createElement('a');
//adding classes
cardElement.className = 'card';
imageContainer.className = 'image-container';
imageElement.className = 'image';
infoContainer.className = 'info-container';
headingElement.className = 'heading'; 
paragraphElement.className = 'paragraph';
btnElement.className = 'button';

imageElement.src = 'https://source.unsplash.com/random';

btnElement.setAttribute('href', 'github.com/ibro6/generate-card-with-js');

paragraphElement.innerText = 'This a card that i wanted to see on this page because i am not a fan of soccer)';
headingElement.innerText = 'Just do it';
btnElement.innerText = 'click me';
// Appending)
bodyElement.appendChild(cardElement);
cardElement.append(imageContainer, infoContainer);
imageContainer.append(imageElement);
infoContainer.append(headingElement, paragraphElement, btnElement);