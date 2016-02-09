/*
  100 things
*/


var cellSize = 90;


function setup(){
  var x1;
  var x2;
  var y1;
  var y2;
  createCanvas(windowWidth,windowHeight);

  background("black");

  for(var row = 0; row <20;row++){
    fill(random(255), random(255), random(255))


    for(var column =0; column <20;column++){
      x1 = cellSize*column;
      y1 = cellSize*row;
      x2 = x1+cellSize;
      y2 = y1+cellSize;


      ellipse(x1, y1, 90, 100);
      ellipse(random(1200),random(100),200,200);
      ellipse(random(1200),random(100),40,40);



stroke('#fae');
      strokeWeight(2)
      line(random(x1,x2),y1,(x1,x2),y2);
      line(random(x2,x1),y2,(x2,x1),y1);


      fill(random(255),random(255),random(255))
      ellipse(random(x1,x2),y1,15,20);
      ellipse(random(y1,y2),x1,15,20);



  }
  }

}
