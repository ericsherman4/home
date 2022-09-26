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

function thing(){
	// Tell it that the document has loaded
	$('body').addClass('loaded');
	//Make the loading text transparent
	$("#loadtext").css("color", "transparent");
}

animated.addEventListener('animationstart', () => {
  console.log('Animation started');
//   animation_started= true;
	setTimeout(thing, 2000);
});


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



