// Global vars to link to document elements. All functions can access.
var welcomeMsg = document.getElementById("welcomeMsg");
var mainText = document.getElementById("mainText");
var trackBtn = document.getElementById("trackBtn");

(function() {
	
	// Initialise Firebase
	const config = {
		apiKey: "AIzaSyA3xE0qL9XBkTvjO-uUzdoxStVDI63-JW4",
				authDomain: "lecture-track.firebaseapp.com",
				databaseURL: "https://lecture-track.firebaseio.com",
				projectId: "lecture-track",
				storageBucket: "lecture-track.appspot.com",
				messagingSenderId: "409097222596"
	};
	firebase.initializeApp(config);
	
	
}());

function trackHeartRate() {
    console.log("In trackHeartRate method");
}