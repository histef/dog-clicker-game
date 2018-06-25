const dog = document.querySelector('.dog');
let count = 0;

function moveDog(){
	dog.style.bottom = Math.floor(Math.random()*(350-35)+35) + 'px';
	dog.style.left = Math.floor(Math.random()*(900-200)+200) + 'px';
	count++;
}

function counter(){
	document.querySelector('.count').textContent = count;
}

function changeSize(){
	if (dog.style.bottom <= '350px' && dog.style.bottom > '275px'){
		return dog.style.width = '50px';
	} else if (dog.style.bottom <= '275px' && dog.style.bottom > '150px'){
		return dog.style.width = '100px';
	} else if (dog.style.bottom <= '150px' && dog.style.bottom > '120px'){
		return dog.style.width = '150px';
	} else {
		return dog.style.width = '200px';
	}
}

dog.addEventListener('click', function(){
	moveDog();
	counter();
	changeSize();
	console.log(dog.style.bottom);
});