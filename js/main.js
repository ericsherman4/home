let count=0;
const uptoval = 10000;
setInterval(update_counter,100);

// https://stackoverflow.com/questions/66324516/how-do-i-wait-for-this-animation-to-finish-before-moving-on-to-the-next-one
const animated = document.getElementById('loader');

// Wait for animation to start
animated.addEventListener('animationstart', () => {
	setTimeout(end_load_screen, 2000);
});

function end_load_screen(){
	// Tell it that the document has loaded
	$('body').addClass('loaded');
	//Make the loading text transparent
	$("#loadtext").css("color", "transparent");
}

//https://www.geeksforgeeks.org/how-to-make-animated-counter-using-javascript/
function update_counter(){
	var counter= document.getElementById("counter");
	count = count + 1;
	counter.innerHTML=count;
}
