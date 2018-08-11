// FSJS - Random Quote Generator
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var message = '';


// Create the array of quote objects and name it quotes
var quotes = [
{
  quote: "Boss... you were right. It's not about changing the world. It's about doing our best to leave the world... the way it is. Its about respecting the will of others, and believing in your own.",
  source: "Big Boss",
  citation: "Metal Gear Solid 4",
  year:2008,
},
{
quote: "Go home and be a family man.",
source: "Major Guile",
citation:"Street Fighter",
year:1987,
},
{
quote: "What is better? To be born good or to overcome your evil nature through great effort?",
source: "Paarthurnax",
citation: "Skyrim",
year:2013,
},
{
quote: "The right man in the wrong place can make all the difference in the world.",
source: "G-Man",
citation: "Halflife 2",
year:2004,
},
{
quote: "Life is cruel. Of this I have no doubt. One can only hope that one leaves behind a lasting legacy. But so often, the legacies we leave behind...are not the ones we intended.",
source: "Queen Myrrah",
citation: "Gears of War 2",
year:2008,
}
];

function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}

// This function allows me to randomly pick a quote or object from the array of quotes.
var viewedQuotes =[];
function getRandomQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length);

	var changeQuote = quotes.splice(randomQuote, 1)[0];
	viewedQuotes.push(changeQuote);
	if ( quotes.length === 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return changeQuote;
}

//This function should obtain the random rgb color value
var red;
var green;
var blue;

function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 300 );
	green = Math.floor(Math.random() * 300 );
	blue = Math.floor(Math.random() * 300 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}



// Function to take a selected random object from array & print to the screen
function printQuote() {
	// On click event, function printQuote runs, then fires the getRandomQuote function
	var quotes = getRandomQuote();
	message ='<p class="quote">' + quotes.quote + '</p>';
	message  += '<p class="source">' + quotes.source;
	if ( quotes.citation ) {
		message += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		message += '';
	}
	if (quotes.year) {
		message += '<span class="year">' + quotes.year + '</span></p>';
	} else {
		message += '';
	}
	if ( quotes.tags ) {
		message += '<h3>' + quotes.tags + '</h3>';
	} else {
		message += '';
	}
	print(message);
	//Generate random color
	randomColorGenerator();
	//Update background with new random color
	document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();
}
