const dog = document.querySelector('.dog');
let count = 0;

//randomly choose dog location
function moveDog(){
	dog.style.bottom = Math.floor(Math.random()*(350-35)+35) + 'px';
	dog.style.left = Math.floor(Math.random()*(850-200)+200) + 'px';
}

//Count tracker
function counter(){
	document.querySelector('.count').textContent = count;
}

//timer that changes dogs location
function changeLocation(){
	setInterval(function(){
		moveDog();
		changeSize();
	}, 4000);
}

//Change size of dog depending on location
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

//Running the game
dog.addEventListener('click', function(){
	moveDog();
	counter();
	changeSize();
	count++;
});

changeLocation();