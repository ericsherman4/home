/* Code is mainly from https://ihatetomatoes.net/create-custom-preloading-screen/ 
   but has slightly been modified*/
/* Thanks mate. */

/* 
 _____   _           _         _                        _                  
|_   _| | |         | |       | |                      | |                 
  | |   | |__   __ _| |_ ___  | |_ ___  _ __ ___   __ _| |_ ___   ___  ___ 
  | |   | '_ \ / _` | __/ _ \ | __/ _ \| '_ ` _ \ / _` | __/ _ \ / _ \/ __|
 _| |_  | | | | (_| | ||  __/ | || (_) | | | | | | (_| | || (_) |  __/\__ \
 \___/  |_| |_|\__,_|\__\___|  \__\___/|_| |_| |_|\__,_|\__\___/ \___||___/

Oh nice, welcome to the js file of dreams.
Enjoy responsibly!
@ihatetomatoes

*/

// TODO need to add your own load thing here
$(document).ready(function() {
	
	// Wait x ms after the page has loaded to display the content
	setTimeout(function(){
		// Tell it that the document has loaded
		$('body').addClass('loaded');
		//Make the loading text transparent
		$("#loadtext").css("color", "transparent")
	}, 1000);
});