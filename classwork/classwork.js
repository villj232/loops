/*
  Classwork
*/

var cellSize = 85;

function setup(){
  var x1;
  var x2;
  var y1;
  var y2;
  createCanvas(windowWidth,windowHeight);

  for(var row = 0; row <20;row++){
    fill(random(255), random(255), random(255))


    for(var column =0; column <20;column++){
      x1 = cellSize*column;
      y1 = cellSize*row;
      x2 = x1+cellSize;
      y2 = y1+cellSize;

      rect(x1, y1, cellSize, cellSize);

      strokeWeight(5)
      line(random(x1,x2),y1,(x1,x2),y2);

      fill(random(255),random(255),random(255))
      ellipse(random(x1,x2),y1,15,20);
      ellipse(random(y1,y2),x1,15,20);

      arc(x1,x2,50,50,0,HALF_PI);




    }
  }

}
