/*
  Classwork
*/

var cellSize = 50;

function setup(){
  createCanvas(windowWidth,windowHeight);

  for(var row = 0; row <20;row++){

    for(var column =0; column <20;column++){

      rect(cellSize*column, cellSize*row, cellSize, cellSize);

    }
  }
}
