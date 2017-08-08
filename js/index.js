$(document).ready(function() {
  function getQuote() {
    var quotes = ["Get over here!", "I am Commander Shepard and this is my favorite store on the Citadel", "Thank you Mario! But our princess is in another castle!", "Would you kindly?", "War... War never changes.","Finish Him!!!"];
    var author = ["- Scorpion Mortal Kombat", "- Mass Effect", "- Super Mario", "- Bioshock", "- Fallout Series", "- Mortal Kombat"];

    var randomNum = Math.floor((Math.random() * quotes.length));
    var randomQuote = quotes[randomNum];
    var randomAuthor = author[randomNum];

    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);

  }
  $(".btn").on("click", function() {
    getQuote();
  }); 
    $('#twitterIcon').click(function() {
    window.open('https://twitter.com/intent/tweet?text=' + $('.quote').text() + " " + $('.author').text());
  });
});