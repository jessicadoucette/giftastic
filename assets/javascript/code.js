$(document).ready(function () {
	//array of movies
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
		}).then(function (response) {
			console.log(response);

			var results = response.data;
			console.log(response.data);

			//loop 10 gifs, their ratings, and their titles
			for (var i = 0; i < 10; i++) {

				var gifDiv = $("<div class='card text-center' style='width:25rem'>");

				//title
				var title = results[i].title;
				var displayTitle = $("<p class='title'>").text(title);

				//rating
				var rating = results[i].rating;
				console.log("Rating: " + rating);

				var displayRating = $("<p>").text("Rating : " + rating);
				console.log(displayRating);

				// gif with animate and still attributest
				var animate = results[i].images.fixed_height.url;
				var still = results[i].images.fixed_height_still.url;
				var movieImage = $("<img>");
				movieImage.attr('src', still);
				movieImage.attr('data-still', still);
				movieImage.attr('data-animate', animate);
				movieImage.attr('data-state', 'still');
				movieImage.addClass('animateImage');

				//pre/appends to gifDiv
				gifDiv.prepend(displayTitle);
				gifDiv.append(displayRating);
				gifDiv.append(movieImage);

				//so it all shows up on the page
				$("#displayGifs").prepend(gifDiv);
			}
		});
	}

	//click to animate/to pause
	$(document).on("click", ".animateImage", function () {
		console.log(this); 
		var state = $(this).attr("data-state");
		if (state == "still") {
			console.log(1); 
			$(this).attr("src", $(this).attr("data-animate"));
			$(this).attr("data-state", "animate");
		} else {
			console.log(2); 
			$(this).attr("src", $(this).attr("data-still"));
			$(this).attr("data-state", "still");
		}
	});

	//render buttons
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

	//add movie function
	$("#add-movie").on("click", function (event) {

		// $("#displayGifs").empty();
		event.preventDefault();
		var movie = $("#movie-input").val().trim();
		movies.push(movie);
		renderButtons();
		console.log("Render add-buttons");
		$("#movie-input").val("");
		return false;
	});

	//display movie gifs when user presses
	$(document).on("click", ".movie-btn", displayMovieGifs);

	//make the buttons appear on page
	renderButtons();
	console.log("Render buttons");

});