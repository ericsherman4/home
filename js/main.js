/* Code is mainly from https://ihatetomatoes.net/create-custom-preloading-screen/ 
   but has slightly been modified*/
/* Thanks mate. */

// $(document).ready(function() {
	
// 	// Wait x ms after the page has loaded to display the content
// 	setTimeout(function(){
// 		// Tell it that the document has loaded
// 		$('body').addClass('loaded');
// 		//Make the loading text transparent
// 		$("#loadtext").css("color", "transparent")
// 	}, 2000);
// });

// https://stackoverflow.com/questions/66324516/how-do-i-wait-for-this-animation-to-finish-before-moving-on-to-the-next-one
const animated = document.getElementById('loader');

var animation_started = false;
// var loader_loaded = false;

let count=0;
const uptoval = 10000;
setInterval(update_counter,100);

function thing(){
	// Tell it that the document has loaded
	$('body').addClass('loaded');
	//Make the loading text transparent
	$("#loadtext").css("color", "transparent");
}

animated.addEventListener('animationstart', () => {
//   console.log('Animation started');
//   animation_started= true;
	setTimeout(thing, 2000);
});

//https://www.geeksforgeeks.org/how-to-make-animated-counter-using-javascript/
function update_counter(){
	var counter= document.getElementById("counter");
	count = count + 1
	counter.innerHTML=count
}


// from https://www.nikitakazakov.com/js-wait-until-loaded-dom-element
// const isElementLoaded = async selector => {
// 	while ( document.querySelector(selector) === null) {
// 	  await new Promise( resolve =>  requestAnimationFrame(resolve) )
// 	}
// 	return document.querySelector(selector);
// };

  // I'm checking for a specific class .file-item and then running code. You can also check for an id or an element.
// isElementLoaded("#loader").then((selector) => {
// 	console.log('loader loaded');
// 	loader_loaded = true;
// });


// if (loader_loaded && animation_started)
// {
// 	console.log('is this true?')
// 	setTimeout(thing, 2000);
// }



