var movies = ["Hereditary", "Sorry to Bother You", "The Big Sick", "Manifesto", "American Psycho", "500 Day of Summer", "Little Gangster", "Get Out", "Little Miss Sunshine", "RBG"]; 

//tether movies buttons to gifs
function displayMovieGifs() {
	var movie = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	 		movie + "&api_key=4lfoNujflLOjMztJEiMYoIDzjy6IdDFC";

	// Creating an AJAX call for the specific movie button being clicked
	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(response) {
		console.log(response); 

		var results = response.data;
		console.log(response.data);

		for (var i = 0; i < 10; i++) {
		
		var gifDiv = $("<div>"); 
		//rating
		var rating = results[i].rating; 
		console.log("Rating: " + rating); 

		var displayRating = $("<p>").text("Rating : " + rating); 
		console.log(displayRating);

		//gif
		var personImage = $("<img>");

              // Giving the image tag an src attribute of a proprty pulled off the
              // result item
              personImage.attr("src", results[i].images.fixed_height.url );


			gifDiv.append(displayRating);
		gifDiv.append(personImage); 
	

		$("#displayGifs").prepend(gifDiv);
		}
	}); 

}

function renderButtons() {

	//for no repeat buttons
	$("#displayButtons").empty(); 

	//Loop through array of movies

	for (i = 0; i < movies.length; i++) {

		var newButton = $("<button>");
		newButton.addClass("movie-btn btn btn-primary"); 
		newButton.attr("data-name", movies[i]);
		newButton.text(movies[i]);
		$("#displayButtons").append(newButton); 
	}
}

$("#add-movie").on("click", function(event) {
event.preventDefault(); 
var movie = $("#movie-input").val().trim(); 
movies.push(movie); 
renderButtons(); 
console.log("Render add-buttons"); 
}); 


$(document).on("click", ".movie-btn", displayMovieGifs);

//make the buttons appear on page
renderButtons(); 
console.log("Render buttons");





//OLD CODE//

// $("button").on("click", function displayMovie() {
// 	var movie = $(this).attr("data-movie");
// 	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
// 		movie + "&api_key=4lfoNujflLOjMztJEiMYoIDzjy6IdDFC";

// 	$.ajax({
// 		url: queryURL,
// 		method: "GET"
// 	})
// 		.then(function(response) {
// 			var results = response.data;
// 			console.log(response);

// 			for (var i = 0; i < 10; i++) {
// 				var gifDiv = $("<div class='item'>");

// 				var title = results[i].title;
// 				var displayTitle = $("<p>").text("Title: " + title); 

// 				var rating = results[i].rating;
// 				var displayRating = $("<p>").text("Rating: " + rating);

// 				var movieImage = $("<img>");
// 				movieImage.attr("src", results[i].images.fixed_height.url);

// 				gifDiv.prepend(displayTitle);
// 				gifDiv.append(displayRating); 
// 				gifDiv.prepend(movieImage);

// 				$("gifs-appear-here").empty();
// 				$("#gifs-appear-here").prepend(gifDiv);
// 			}
// 		});
// });

// function renderButtons() {

// 	$("#buttons-view").empty();

//         // Looping through the array of movies
//         for (var i = 0; i < movie.length; i++) {

//           // Then dynamicaly generating buttons for each movie in the array
//           // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//           var newButton = $("<button>");
//           // Adding a class of movie-btn to our button
//           newButton.addClass("movie-btn");
//           // Adding a data-attribute
//           newButton.attr("data-name", movie[i]);
//           // Providing the initial button text
//           newButton.text(movie[i]);
//           // Adding the button to the buttons-view div
//           $("#buttons-view").append(newButton);
//         }
//       }

//       // This function handles events where a movie button is clicked
//       $("#add-movie").on("click", function(event) {
//         event.preventDefault();
//         // This line grabs the input from the textbox
//         var movieInput = $("#movie-input").val().trim();

//         // Adding movie from the textbox to our array
//         movie.push(movieInput);

//         // Calling renderButtons which handles the processing of our movie array
//         renderButtons();
//       });

//       // Adding a click event listener to all elements with a class of "movie-btn"
//       $(document).on("click", ".movie-btn", displayMovie);

//       // Calling the renderButtons function to display the intial buttons
//       renderButtons();
