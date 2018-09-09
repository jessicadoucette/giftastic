<h1>Giftastic</h1>

See app here: https://jessicadoucette.github.io/giftastic/

<h2>html/css</h2>

1. Used a jumbotron for the header. Used a Sundance photo as the background image and positioned it to center; size cover. I padded it to look good and made the font color white.
2. The h1 was adjusted for a larger font size and tighter letter spacing for ~aesthetic~. 
3. Next line is a div for the display buttons - all which are created in JS
4. Under the buttons is the small form to input a movie of your choice, adding a button to the row of buttons above.
5. To end, a div to display the gifs after the user clicks one of the above buttons. 
6. I used a couple media queries to adjust the h1 and h2 font sizes. I added padding to other elements to make it look tasteful. 


<h2>Javascript</h2>
For a step by step, please look at the comments in the code.js file. 
Here's a basic list of what I created: 

1. Used my own Giphy API key. 
2. For loop stops after 10 gifs.
3. To create the gif div, I added bootstrap classes of "card", "text center", and a style to set the width of the card. This is all for aesthetic purposes. Also my first time using cards!
4. Added the giphy "title" in addition to rating for some extra info. 
5. Within the for loop is some exciting code to make the gif still upon load, but still creating an attribute for animate that we can manipulate later.
6. Then some code to tie the variables to the gifDiv, and then tagging the html displayGifs id to append all that for loop code to the site.
7. Next is code to animate the gifs upon click, and pause on the next click. This is accomplished using an if, then statement and calling out the attributes listed above.
8. Next is code to make the buttons. Also included css classes to make them look pretty. 
9. Something important is in lines 98 and 99 -- this is code so that a blank input and submit will not append random gifs to the page. 
10. The document is closed out with code to run the functions on the movie button clicks and the render buttons function. 
