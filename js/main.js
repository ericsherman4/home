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


// from https://www.nikitakazakov.com/js-wait-until-loaded-dom-element
const isElementLoaded = async selector => {
	while ( document.querySelector(selector) === null) {
	  await new Promise( resolve =>  requestAnimationFrame(resolve) )
	}
	return document.querySelector(selector);
  };

  // I'm checking for a specific class .file-item and then running code. You can also check for an id or an element.
  isElementLoaded("#loader").then((selector) => {
	setTimeout(function(){
		// Tell it that the document has loaded
		$('body').addClass('loaded');
		//Make the loading text transparent
		$("#loadtext").css("color", "transparent")
	}, 2000);
  });