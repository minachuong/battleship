// var board = [,0,,,,0,,,0,];
//ships are at 1,5,8

var board = [[],[],[],[],[],[],[],[],[],[]];
//placed ships
board[0][2] = 0;
board[3][2] = 0;
board[4][4] = 0;
board[7][8] = 0;
board[9][4] = 0;

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
      console.log("There is a ship above or below. *2");
      return true;
    }
    else {
      console.log("There are NOOOOO adjacent ships above or below *2");
      return false;
    }//end of if
  };//end of if

  //check above has a ship
  if(rowIndex === 9) {
    if(board[8][columnIndex] === 0) {
      console.log("There is a ship above or below *3");
      return true;
    }
    else {
      console.log("There are NOOOOO adjacent ships above or below *3");
      return false;
    }//end of if
  };//end of if
};//end of function

//checks to see if there is a ship left or right
function checkHorizontally(rowIndex,columnIndex) {
  //if column index is 1-8
  if(columnIndex > 0 && columnIndex < 9) {
    //check left or right has a ship
    if(board[row][columnIndex + 1] === 0 || board[row][columnIndex - 1] === 0) {
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


//TESTING
//FIXME checkHorizontally first condition does not read consistently

// test values surrounding board[0][2]
checkVertically(0,1);
// test for 0,1 horiz does NOT return true
checkHorizontally(0,1);
checkVertically(0,3);
checkHorizontally(0,3);
checkVertically(1,2);
checkHorizontally(1,2);

// test values surrounding board[3][2]
checkVertically(3,1);
// test for 3,1 horiz does NOT return true
checkHorizontally(3,1);
checkVertically(3,3);
checkHorizontally(3,3);
checkVertically(2,2);
checkHorizontally(2,2);
checkVertically(4,2);
checkHorizontally(4,2);

// test values surrounding board[4][4] - all correct
checkVertically(4,3);
checkHorizontally(4,3);
checkVertically(4,5);
checkHorizontally(4,5);
checkVertically(3,4);
checkHorizontally(3,4);
checkVertically(5,4);
checkHorizontally(5,4);

// test values surrounding board[7][8] - all correct
checkVertically(7,7);
// test for 7,7 horiz does NOT return true
checkHorizontally(7,7);
checkVertically(7,9);
checkHorizontally(7,9);
checkVertically(6,8);
checkHorizontally(6,8);
checkVertically(8,8);
checkHorizontally(8,8);
