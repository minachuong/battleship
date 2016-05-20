// var board = [,0,,,,0,,,0,];
//ships are at 1,5,8

var board = [[],[],[],[],[],[],[],[],[],[]];
//placed ships
board[0][2] = 0;
board[6][9] = 0;
board[5][0] = 0;
board[9][0] = 0;
board[0][9] = 0;

var row = Math.floor(Math.random()*10);
console.log("the row number is " + row);
var col = Math.floor(Math.random()*10);
console.log("the col number is " + col);

// if(board[a] === 0) {
//   console.log("There is a ship here")
// };//end of if

//checks to see if there is a ship above or below
function checkVertically(rowIndex,columnIndex) {
  //if row index is 1-8
  if(rowIndex > 0 && rowIndex < 9) {
    //check above or below has a ship
    if(board[rowIndex + 1][columnIndex] === 0 || board[rowIndex - 1][columnIndex] === 0) {
      console.log("There is a ship above or below. *1");
      return true;
    }//end of if
    else {
      console.log("There are NOOOOO adjacent ships above or below *1");
      return false;
    }
  };//end of if

  //if row index is 0
  if(rowIndex === 0) {
    //check below has a ship
    if(board[1][columnIndex] === 0) {
      console.log("There is a ship below. *2");
      return true;
    }
    else {
      console.log("There are NOOOOO adjacent ships below *2");
      return false;
    }//end of if
  };//end of if

  //check above has a ship
  if(rowIndex === 9) {
    if(board[8][columnIndex] === 0) {
      console.log("There is a ship above*3");
      return true;
    }
    else {
      console.log("There are NOOOOO adjacent ships above  *3");
      return false;
    }//end of if
  };//end of if
};//end of function

// Purpose: checks to see if there is a ship left or right
// Function: returns true if there is ship too close
function checkHorizontally(rowIndex, columnIndex) {
  //if column index is 1-8
  if(columnIndex > 0 && columnIndex < 9) {
    //check left or right has a ship
    // alert("board[rowIndex][columnIndex + 1]:" + rowIndex + " " + (columnIndex + 1) + " "+ board[rowIndex][columnIndex + 1]);
    // alert("board[rowIndex][columnIndex - 1]:" + rowIndex + " " + (columnIndex - 1) + " "+ board[rowIndex][columnIndex - 1]);


    if(board[rowIndex][columnIndex + 1] === 0 || board[rowIndex][columnIndex - 1] === 0) {
      console.log("There is a ship left or right. *1");
      return true;
    }//end of if
    else {
      console.log("There are NOOOOO adjacent ships left or right *1");
      return false;
    }
  };//end of if

  //if column index is 0
  if(columnIndex === 0) {
    //check the right has a ship
    if(board[rowIndex][1] === 0) {
      console.log("There is a ship left or right. *2");
      return true;
    }
    else {
      console.log("There are NOOOOO adjacent ships left or right *2");
      return false;
    }//end of if
  };//end of if

  //if column index is 9
  if(columnIndex === 9) {
    //check the left has a ship
    if(board[rowIndex][8] === 0) {
      console.log("There is a ship left or right. *3");
      return true;
    }
    else {
      console.log("There are NOOOOO adjacent ships left or right *3");
      return false;
    }//end of if
  };//end of if
};//end of function
// trying function to check vertical1y
function checkDiagonally(rowIndex,columnIndex) {
  //if row index is 1-8
  if(rowIndex > 0 && rowIndex < 9 && columnIndex > 0 && columnIndex < 9) {
    //check above or below has a ship
    if(board[rowIndex - 1][columnIndex - 1] === 0 || board[rowIndex + 1][columnIndex - 1 ] === 0 || board[rowIndex - 1][columnIndex + 1] === 0 || board[rowIndex + 1][columnIndex + 1] === 0) {
     console.log("There is a ship above left or or above right or below right or below left. *1");
      return true;
    }//end of if
    else {
     console.log("There are NOOOOO adjacent ships diagonally *1");
      return false;
    }
  };//end of if

  //if row index is 0, check below left and below right
  if(rowIndex === 0 && columnIndex != 0 && columnIndex != 9) {
    //check below has a ship
    if(board[rowIndex + 1][columnIndex - 1] === 0 || board[rowIndex + 1][columnIndex + 1] === 0) {
     console.log("There is a ship below left or below right. *2");
      return true;
    }
    else {
     console.log("There are NOOOOO adjacent ships below *2");
      return false;
    }//end of if
  };//end of if

  //if row index is 9, check above left and above right
  if(rowIndex === 9 && columnIndex != 0 && columnIndex != 9) {
    if(board[rowIndex - 1][columnIndex - 1] === 0 || board[rowIndex - 1][columnIndex + 1] === 0) {
     console.log("There is a ship above left or above right*3");
      return true;
    }
    else {
     console.log("There are NOOOOO adjacent ships above  *3");
      return false;
    }//end of if
  };//end of if

  //if column index is 0, check right above or right below
  if(columnIndex === 0 && rowIndex != 0 && rowIndex != 9) {
    //check right has a ship
    if(board[rowIndex - 1][columnIndex + 1] === 0 || board[rowIndex + 1][columnIndex + 1] === 0) {
     console.log("There is a ship right above or right below. *2");
      return true;
    }
    else {
     console.log("There are NOOOOO adjacent ships below *2");
      return false;
    }//end of if
  };//end of if

  //if column index is 9, check left above or left below
  if(columnIndex === 9 && rowIndex != 0 && rowIndex != 9) {
    if(board[rowIndex - 1][columnIndex - 1] === 0 || board[rowIndex + 1][columnIndex - 1] === 0) {
     console.log("There is a ship left above or left below *3");
      return true;
    }
    else {
     console.log("There are NOOOOO adjacent ships above  *3");
      return false;
    }//end of if
  };//end of if
  //check top left position
  if(columnIndex === 0 && rowIndex === 0) {
    if(board[rowIndex + 1][columnIndex + 1] === 0) {
     console.log("There is a ship lower right");
      return true;
    }
    else {
     console.log("There are NOOOOO adjacent ship");
      return false;
    }//end of if
  };//end of if
  //check top right position
  if(columnIndex === 9 && rowIndex === 0) {
    if(board[rowIndex + 1][columnIndex - 1] === 0) {
     console.log("There is a ship lower left");
      return true;
    }
    else {
     console.log("There are NOOOOO adjacent ship");
      return false;
    }//end of if
  };//end of if
  //check bottom right position
  if(columnIndex === 9 && rowIndex === 9) {
    if(board[rowIndex - 1][columnIndex - 1] === 0) {
     console.log("There is a ship adjacent");
      return true;
    }
    else {
     console.log("There are NOOOOO adjacent ship");
      return false;
    }//end of if
  };//end of if
  //check bottom left position
  if(columnIndex === 0 && rowIndex === 9) {
    if(board[rowIndex - 1][columnIndex + 1] === 0) {
     console.log("There is a ship adjacent");
      return true;
    }
    else {
     console.log("There are NOOOOO adjacent ship");
      return false;
    }//end of if
  };//end of if

};//end of function

// Purpose: checks to see if there is a ship left or right
// Function: returns true if there is ship too close








//TESTING
//FIXME checkHorizontally() first condition does not read consistently

// test values surrounding board[0][2]
checkVertically(0,1);
checkHorizontally(0,1);
checkVertically(0,3);
checkHorizontally(0,3);
checkVertically(1,2);
checkHorizontally(1,2);
checkDiagonally(1,1);
checkDiagonally(1,3);


// test values surrounding board[6][9]
checkVertically(5,9);
checkHorizontally(5,9);
checkVertically(6,8);
checkHorizontally(6,8);
checkVertically(7,9);
checkHorizontally(7,9);
checkDiagonally(5,8); //FIXME
checkDiagonally(7,8);



// test values surrounding board[5][0] - all correct
checkVertically(4,0);
checkHorizontally(4,0);
checkVertically(5,1);
checkHorizontally(5,1);
checkVertically(6,0);
checkHorizontally(6,0);
checkVertically(7,0);
checkHorizontally(7,0);
checkDiagonally(4,1);
checkDiagonally(6,1);


// test values surrounding board[9][0] - all correct
checkVertically(8,0);
checkHorizontally(8,0);
checkVertically(9,1);
checkHorizontally(9,1);
// checkVertically(6,8);
// checkHorizontally(6,8);
// checkVertically(8,8);
// checkHorizontally(8,8);

// test values surrounding board[0][9] - all correct
checkVertically(0,8);
checkHorizontally(0,8);
checkVertically(1,9);
checkHorizontally(1,9);
// checkVertically(6,8);
// checkHorizontally(6,8);
// checkVertically(8,8);
// checkHorizontally(8,8);
