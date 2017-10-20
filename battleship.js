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

//checks to see if there is a ship above or below
function checkVertically(rowIndex,columnIndex) {
  //if row index is 1-8
  if(rowIndex > 0 && rowIndex < 9) {
    //check above or below has a ship
    if(board[rowIndex + 1][columnIndex] === 0 || board[rowIndex - 1][columnIndex] === 0) {
      console.log("There is a ship above or below " + rowIndex + columnIndex);
      return true;
    }//end of if
    else {
      console.log("There are no adjacent ships above or below " + rowIndex + columnIndex);
      return false;
    }
  };//end of if

  //if row index is 0
  if(rowIndex === 0) {
    //check below has a ship
    if(board[1][columnIndex] === 0) {
      console.log("There is a ship below " + rowIndex + columnIndex);
      return true;
    }
    else {
      console.log("There are no adjacent ships below " + rowIndex + columnIndex);
      return false;
    }//end of if
  };//end of if

  //check above has a ship
  if(rowIndex === 9) {
    if(board[8][columnIndex] === 0) {
      console.log("There is a ship above " + rowIndex + columnIndex);
      return true;
    }
    else {
      console.log("There are no adjacent ships above " + rowIndex + columnIndex);
      return false;
    }//end of if
  };//end of if
};//end of function

// Purpose: checks to see if there is a ship left or right of a location
// Signature: receives rowIndex and columnIndex;returns true if there is ship too close
function checkHorizontally(rowIndex, columnIndex) {
  //if column index is 1-8
  if(columnIndex > 0 && columnIndex < 9) {
    //check left or right has a ship
    // alert("board[rowIndex][columnIndex + 1]:" + rowIndex + " " + (columnIndex + 1) + " "+ board[rowIndex][columnIndex + 1]);
    // alert("board[rowIndex][columnIndex - 1]:" + rowIndex + " " + (columnIndex - 1) + " "+ board[rowIndex][columnIndex - 1]);


    if(board[rowIndex][columnIndex + 1] === 0 || board[rowIndex][columnIndex - 1] === 0) {
      console.log("There is a ship left or right " + rowIndex + columnIndex);
      return true;
    }//end of if
    else {
      console.log("There are no adjacent ships left or right " + rowIndex + columnIndex);
      return false;
    }
  };//end of if

  //if column index is 0
  if(columnIndex === 0) {
    //check the right has a ship
    if(board[rowIndex][1] === 0) {
      console.log("There is a ship left or right " + rowIndex + columnIndex);
      return true;
    }
    else {
      console.log("There are no adjacent ships left or right " + rowIndex + columnIndex);
      return false;
    }//end of if
  };//end of if

  //if column index is 9
  if(columnIndex === 9) {
    //check the left has a ship
    if(board[rowIndex][8] === 0) {
      console.log("There is a ship left or right " + rowIndex + columnIndex);
      return true;
    }
    else {
      console.log("There are no adjacent ships left or right " + rowIndex + columnIndex);
      return false;
    }//end of if
  };//end of if
};//end of function

//  function to check diagonally including all possible squares
function checkDiagonally(rowIndex,columnIndex) {
  //if row index is 1-8
  if(rowIndex > 0 && rowIndex < 9 && columnIndex > 0 && columnIndex < 9) {
    //check above or below has a ship
    if(board[rowIndex - 1][columnIndex - 1] === 0 || board[rowIndex + 1][columnIndex - 1 ] === 0 || board[rowIndex - 1][columnIndex + 1] === 0 || board[rowIndex + 1][columnIndex + 1] === 0) {
     console.log("There is a ship above left or or above right or below right or below left " + rowIndex + columnIndex);
      return true;
    }//end of if
    else {
     console.log("There are no adjacent ships diagonally " + rowIndex + columnIndex);
      return false;
    }
  };//end of if

  //if row index is 0, check below left and below right
  if(rowIndex === 0 && columnIndex != 0 && columnIndex != 9) {
    //check below has a ship
    if(board[rowIndex + 1][columnIndex - 1] === 0 || board[rowIndex + 1][columnIndex + 1] === 0) {
     console.log("There is a ship below left or below right " + rowIndex + columnIndex);
      return true;
    }
    else {
     console.log("There are no adjacent ships below " + rowIndex + columnIndex);
      return false;
    }//end of if
  };//end of if

  //if row index is 9, check above left and above right
  if(rowIndex === 9 && columnIndex != 0 && columnIndex != 9) {
    if(board[rowIndex - 1][columnIndex - 1] === 0 || board[rowIndex - 1][columnIndex + 1] === 0) {
     console.log("There is a ship above left or above right " + rowIndex + columnIndex);
      return true;
    }
    else {
     console.log("There are no adjacent ships above " + rowIndex + columnIndex);
      return false;
    }//end of if
  };//end of if

  //if column index is 0, check right above or right below
  if(columnIndex === 0 && rowIndex != 0 && rowIndex != 9) {
    //check right has a ship
    if(board[rowIndex - 1][columnIndex + 1] === 0 || board[rowIndex + 1][columnIndex + 1] === 0) {
     console.log("There is a ship right above or right below " + rowIndex + columnIndex);
      return true;
    }
    else {
     console.log("There are no adjacent ships below " + rowIndex + columnIndex);
      return false;
    }//end of if
  };//end of if

  //if column index is 9, check left above or left below
  if(columnIndex === 9 && rowIndex != 0 && rowIndex != 9) {
    if(board[rowIndex - 1][columnIndex - 1] === 0 || board[rowIndex + 1][columnIndex - 1] === 0) {
     console.log("There is a ship left above or left below " + rowIndex + columnIndex);
      return true;
    }
    else {
     console.log("There are no adjacent ships above " + rowIndex + columnIndex);
      return false;
    }//end of if
  };//end of if
  //check top left position
  if(columnIndex === 0 && rowIndex === 0) {
    if(board[rowIndex + 1][columnIndex + 1] === 0) {
     console.log("There is a ship lower right " + rowIndex + columnIndex);
      return true;
    }
    else {
     console.log("There are no adjacent ship " + rowIndex + columnIndex);
      return false;
    }//end of if
  };//end of if
  //check top right position
  if(columnIndex === 9 && rowIndex === 0) {
    if(board[rowIndex + 1][columnIndex - 1] === 0) {
     console.log("There is a ship lower left " + rowIndex + columnIndex);
      return true;
    }
    else {
     console.log("There are no adjacent ship " + rowIndex + columnIndex);
      return false;
    }//end of if
  };//end of if
  //check bottom right position
  if(columnIndex === 9 && rowIndex === 9) {
    if(board[rowIndex - 1][columnIndex - 1] === 0) {
     console.log("There is a ship adjacent " + rowIndex + columnIndex);
      return true;
    }
    else {
     console.log("There are no adjacent ship " + rowIndex + columnIndex);
      return false;
    }//end of if
  };//end of if
  //check bottom left position
  if(columnIndex === 0 && rowIndex === 9) {
    if(board[rowIndex - 1][columnIndex + 1] === 0) {
     console.log("There is a ship adjacent " + rowIndex + columnIndex);
      return true;
    }
    else {
     console.log("There are no adjacent ship " + rowIndex + columnIndex);
      return false;
    }//end of if
  };//end of if

};//end of function


//generates location of five ships; begin for-loop
for (var i = 0; i < 5; i++) {
  var a;
  var b;
  do {
    //generates the coordinates of ship
    a = Math.floor(Math.random()*10);
    b = Math.floor(Math.random()*10);
    console.log("ship at: " + a + b);
    //continue to generate coordinates for ship while the already-generated coordinates are the location of a ship
    //TODO add  || checkAdjacentShips(a,b) into condition when function is done
    // checkAdjacentShips(a,b));
  } while (board[a][b] === SHIP || checkVertically(a,b) || checkHorizontally(a,b) || checkDiagonally(a,b));
  //end of do-while loop

  //places a ship where there is no ship
  board[a][b] = SHIP;
  //saves ship locations into an array used to reveal unsunken ships
  shipLocations[shipLocations.length] = "" + a + b;
  // alert(shipLocations);
} // end for loop

//randomly choose orientation of ship
function isHorizontal(){
  return Math.floor(Math.random()*10) > 4;
}

function checkHorizontalLength(rowIndex, columnIndex, lengthOfShip){
  for(var f = 0; f < lengthOfShip; f++) {
    if (board[rowIndex][columnIndex] === SHIP) {
      return false;
    }
    columnIndex++;   
  }
  return true;
}

function checkVerticalLength(rowIndex, columnIndex, lengthOfShip){
  for(var g = 0; g < lengthOfShip; g++) {
    if (board[rowIndex][columnIndex] === SHIP) {
      return false;
    }
    rowIndex++;   
  }
  return true;
}

function isPlaceableByLengthOrientation(rowIndex, columnIndex, lengthOfShip, orientation) {
  if (orientation) {
    return columnIndex + lengthOfShip <= 10 && board[rowIndex][columnIndex] != SHIP && checkHorizontalLength(rowIndex, columnIndex, lengthOfShip);  
  } else {
    return rowIndex + lengthOfShip <= 10 && board[rowIndex][columnIndex] != SHIP && checkVerticalLength(rowIndex, columnIndex, lengthOfShip);
  }
}

//Purpose: creates coordinates of entire ship
//Signature: receives a number that represents ship length, returns array of coordinates that represent the ship
function createShip(lengthOfShip) {
  var shipCoordinates = [];
  var c;
  var d;
  var orientation = isHorizontal();
  console.log(orientation)
  do {
    //generates the coordinates of ship
    c = Math.floor(Math.random()*10);
    d = Math.floor(Math.random()*10);
    console.log("ship at: " + c + d);
    //regenerate first coordinates of ship if they are invalid coordinates 
  } while (board[c][d] === SHIP || checkVertically(c,d) || checkHorizontally(c,d) || checkDiagonally(c,d) || !isPlaceableByLengthOrientation(c,d,lengthOfShip, orientation));
  shipCoordinates.push("" + c + d);
  console.log(shipCoordinates)   
  for (var k = 0; k < lengthOfShip - 1; k++) {
    if (orientation) {
      d++;
    } else {
      c++;
    }
    shipCoordinates.push("" + c + d);  
  } 
  console.log(shipCoordinates);
}

$(document).ready( function() {
  // begin table creation
  for(var i = 0; i < 10; i++) { //while i is less than 10
     //create a table row in tbody
    $("tbody").append("<tr id='" + i + "'></tr>");
    //while j is less than 10
    for(var j = 0; j < 10; j++) {
      //create a table data in table rows
      $('<td id="' + i + j + '">' + i + j + '</td>').appendTo('#'+i);
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
        //alert("You have used all your torpedoes. You LOSE.");
        //iterates through array to add class="unsunken"
        shipLocations.forEach(revealShips);
        $("td").off("click");
      };
    } else {
      //determine if square has already been clicked. no torpedo used.
      if((board[x][y] === HIT || board[x][y] === MISS) && torpedoesUsed < 25 && hits != 5){
        alert("You have already torpedoed this location. Please try again.");
      } else {
        //if there is a ship
        if (board[x][y] === SHIP) {
          //store a hit at this location
          board[x][y] = HIT;
          //add class="hit" to the element which will change its image
          $(this).addClass("hit");
          //increments torpedoes
          torpedoesUsed++;
          //increments hits
          hits++;
          //replaces text to indicate torpedoes left
          $("#torpedoesLeft").text("You still have "+(25 - torpedoesUsed)+ " torpedoes left.");


          //indicates user has won or shows increment number of hits
          if(hits === 5) {
            //replaces text to user has won
            $("#numberOfHits").text("You have sunken all five ships. YOU WIN!!!!");
            //alert("You have sunken all five ships. YOU WIN!!!!");
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
