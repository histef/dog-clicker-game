const dog = document.querySelector('.dog');
let count = 0;
//TODO: resize dog depending on what ylevel he is on.

//TODO: when dog is clicked, count clicks & move dog.
function moveDog(){
	dog.style.bottom = Math.floor(Math.random()*(350-100)+100) + 'px';
	dog.style.left = Math.floor(Math.random()*(950-200)+200) + 'px';
	count++;
}

function counter(){
	document.querySelector('.count').textContent = count;
}

dog.addEventListener('click', function(){
	moveDog();
	counter();
});