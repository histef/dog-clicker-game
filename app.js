const dog = document.querySelector('.dog');

//TODO: resize dog depending on what ylevel he is on.

//TODO: when dog is clicked, count clicks & move dog.

function moveDog(){
	dog.style.bottom = Math.floor(Math.random()*(350-100)+100) + 'px';
	console.log(dog.style.bottom);
	dog.style.left = Math.floor(Math.random()*(950-200)+200) + 'px';	
	console.log(dog.style.left);
	/*xPos = ;
	yPos = */
}
//eventlistener is working

dog.addEventListener('click', moveDog);