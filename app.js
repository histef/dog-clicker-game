const dog = document.querySelector('.dog');
let count = 0;

//timer
let mins = 0;
let secs = 59;
let interval;
let isGameOn = false;

function timer() {
    if (!isGameOn) {
        interval = setInterval(function() {
            document.querySelector('.timer').textContent = `${mins} : ${secs}`;
            secs--;
            if (secs === 0) {
				clearInterval(interval);
				gameOverModal();
	        }
        }, 1000);
        isGameOn = true;
    	};
}

//randomly choose dog location
function moveDog(){
	dog.style.bottom = Math.floor(Math.random()*(350-35)+35) + 'px';
	dog.style.left = Math.floor(Math.random()*(850-200)+200) + 'px';
}

//count tracker
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

const dogMessage = ['hiya', 'yeah!', 'you rule!', 'got me', 'bark'];

function dogTalk(){
	const talk= document.querySelector('.talk');
	//get dogMessage
	talk.textContent = dogMessage[Math.floor(Math.random()*dogMessage.length)];
	//toggle css class
	talk.style.visibility = 'visible';
    setTimeout(function() {
        talk.style.visibility = 'hidden';
    }, 750);
    //set location
    let dogY = dog.style.bottom;
    let getYNumber = (dogY.match(/\d/g)).join('');
    getYNumber = Number(getYNumber) + 75;
    talk.style.bottom = (getYNumber + 'px');
    let dogX = dog.style.left;
    let getXNumber = (dogX.match(/\d/g)).join('');
    getXNumber = Number(getXNumber) - 75;
    talk.style.left = (getXNumber + 'px');
}

// Win Modal, Basic modal code is attributed to w3schools.com
const modal = document.querySelector('.modal');
const playAgainBtn = document.querySelector('.play-again-btn');
const closeBtn = document.querySelector(".closeBtn");

function gameOverModal() {
    const finalCount = document.querySelector('.final-count');
    finalCount.innerHTML = count;
    modal.style.display = "block";
}

playAgainBtn.onclick = function() {
    reset();
    modal.style.display = "none";
};

closeBtn.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    };
};

function reset(){
	document.querySelector('.timer').textContent = "1:00";
	document.querySelector('.count').textContent = 0;
	secs = 59;
	count = 0;
	timer();
	isGameOn = false;
}

//Running the game
dog.addEventListener('click', function(){
	count++;
	timer();
	moveDog();
	counter();
	changeSize();
	dogTalk();
});

changeLocation();