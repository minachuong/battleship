//models SHIP as 0
var SHIP = 0;

//models MISS as -1
var MISS = -1;

//models HIT as 1
var HIT = 1;

//models the board
var board = [[],[],[],[],[],[],[],[],[],[]];
var shipLocations = [];
// board[0][0] = SHIP;
// board[1][0] = SHIP;

//generates location of five ships; begin for loop
for (var i = 0; i < 5; i++) {
  var a;
  var b;
  do {
    //generates the location of one ship
    a = Math.floor(Math.random()*10);
    b = Math.floor(Math.random()*10);
    console.log("bomb at: " + a + b);
  } while (board[a][b] === SHIP);
  board[a][b]=SHIP;
  shipLocations[shipLocations.length] = "" + a + b;
  alert(shipLocations);
} // end for loop

//counter for clicks = torpedoesUsed
var torpedoesUsed = 0;

//counts number of hits
var hits = 0;

function revealShips(id) {
  if($("#" + id).attr("class") != "red")
  $("#" + id).addClass("orange");
}


$(document).ready( function() {

  // begin table creation loop
  for(var i = 0; i < 10; i++) { //while i is less than 10
     //create a table row in tbody
    var newTableRow = $("tbody").append("<tr></tr>");
    //while j is less than 10
    for(var j = 0; j < 10; j++) {
      //create a table data in table rows
      newTableRow.append('<td id="' + i + j + '">' + i + j + '</td>');
    };
  };// end table creation loop

  // whenever a td is clicked this is executed
  $("td").on("click", function() {
    //assigning value of variable as the id of the square clicked
    var idOfClickedElement = $(this).attr("id");
    // saves the first element of ship position in x
    var x = parseInt(idOfClickedElement.charAt(0));
    // saves the first element of ship position in y
    var y = parseInt(idOfClickedElement.charAt(1));

    //determine if square has already been clicked. no torpedo used
    if(board[x][y] === HIT || board[x][y] === MISS ){
      alert("You have already torpedoed this location. Please try again.");
    } else {
      torpedoesUsed++;
    }

    // change color of square clicked based on hit
    if (board[x][y] === SHIP) {
      board[x][y] = HIT;
      $(this).addClass("red");
      hits++;
      if(hits === 5) {
        alert("You have sunken all five ships. YOU WIN!!!!");
        //replaces text to indicate torpedoes left
        $("#numberOfHits").text("You have sunken all five ships. YOU WIN!!!!");
      };

    }
    else {
      // change color of square clicked based on miss
      board[x][y] = MISS;
      $(this).addClass("grey");
      if(torpedoesUsed === 25) {
        alert("You have no more torpedoes left. You LOSE!");
        //replaces text to indicate torpedoes left
        $("#torpedoesLeft").text("You have no more torpedoes left. You LOSE!");
        //if user has lost
        shipLocations.forEach(revealShips);
      }
      // if(board[x][y]===0 || board[x][y]===1) {
      //   $(this).addClass("orange");
      // }
    };

    //replaces text to indicate torpedoes left
    $("#torpedoesLeft").text("You still have "+(25 - torpedoesUsed)+ " torpedoes left.");
    $("#numberOfHits").text("You have " + hits + " hits.");


  });


});
