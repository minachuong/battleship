//models SHIP as 0
var SHIP = 0;

//models MISS as -1
var MISS = -1;

//models HIT as 1
var HIT = 1;

//models nothing as undefined
var NOTHING = undefined;

//models the board
var board = [[],[],[],[],[],[],[],[],[],[]];

//saves ship locations
var shipLocations = [];

//generates location of five ships; begin for-loop
for (var i = 0; i < 5; i++) {
  var a;
  var b;
  do {
    //generates the coordinates of ship
    a = Math.floor(Math.random()*10);
    b = Math.floor(Math.random()*10);
    console.log("bomb at: " + a + b);
    //continue to generate coordinates for ship while the already-generated coordinates are the location of a ship
  } while (board[a][b] === SHIP);   //end of do-while loop
  //places a ship where there is no ship
  board[a][b]=SHIP;
  //saves ship locations into an array used to reveal unsunken ships
  shipLocations[shipLocations.length] = "" + a + b;
  // alert(shipLocations);
} // end for loop

//counter for clicks = torpedoesUsed
var torpedoesUsed = 0;

//counts number of hits
var hits = 0;

//function only adds class="unsunken" if the ship has not been hit
function revealShips(id) {
  //selects element with ID and checks to see if it has been sunken
  if($("#" + id).attr("class") != "hit") {
    //adds class of unsunken to reveal after user loses
    $("#" + id).addClass("unsunken");
  }
}

$(document).ready( function() {

  // begin table creation
  for(var i = 0; i < 10; i++) { //while i is less than 10
     //create a table row in tbody
    var newTableRow = $("tbody").append("<tr></tr>");
    //while j is less than 10
    for(var j = 0; j < 10; j++) {
      //create a table data in table rows
      newTableRow.append('<td id="' + i + j + '">' + i + j + '</td>');
    }; // end of inner for loop
  };// end table creation

  // whenever a td is clicked this is executed
  $("td").on("click", function() {
    //assigning value of variable as the id of the square clicked
    var idOfClickedElement = $(this).attr("id");
    // saves the first element of ship position in x
    var x = parseInt(idOfClickedElement.charAt(0));
    // saves the first element of ship position in y
    var y = parseInt(idOfClickedElement.charAt(1));

    //When the square clicked has not been clicked and the game is in play
    if(board[x][y] === NOTHING && hits < 5) {
      //if game is in play
      if (torpedoesUsed < 25) {
        //stores -1 at this location
        board[x][y] = MISS;
        // change image of square clicked based on miss
        $(this).addClass("miss");
        //increments torpedoesUsed
        torpedoesUsed++;
        //replaces text to indicate torpedoes left
        $("#torpedoesLeft").text("You still have "+(25 - torpedoesUsed)+ " torpedoes left.");
      };
      //when user loses
      if(torpedoesUsed === 25) {
        //replaces text to indicate torpedoes left
        $("#torpedoesLeft").text("You have used all your torpedoes. You LOSE.");
        alert("You have used all your torpedoes. You LOSE.");
        //iterates through array to add class="unsunken"
        shipLocations.forEach(revealShips);
      };
    } else {
      //determine if square has already been clicked. no torpedo used.
      if((board[x][y] === HIT || board[x][y] === MISS) && torpedoesUsed < 25){
        alert("You have already torpedoed this location. Please try again.");
      } else {
        //if there is a ship
        if (board[x][y] === SHIP) {
          //store a hit at this location
          board[x][y] = HIT;
          //add class="hit" to the element which will change its image
          $(this).addClass("hit");
          //increments hits
          hits++;
          //indicates user has won or shows increment number of hits
          if(hits === 5) {
            //replaces text to user has won
            $("#numberOfHits").text("You have sunken all five ships. YOU WIN!!!!");
            alert("You have sunken all five ships. YOU WIN!!!!");
          }
          else {
            //replaces text to indicate number of hits
            $("#numberOfHits").text("You have " + hits + " hits.");

          };
        };
      };
    };
  });
});
