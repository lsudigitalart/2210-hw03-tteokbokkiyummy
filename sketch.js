function setup(){
    createCanvas(500,500);
    background (30);
      //ellipse(i+10, 10, 10, 10);  
        //console.log("that value of i is now: ", i);


}

function draw(){

  for(var i = 0; i<20; i=i+1){
    for (var j = 0; j<16; j=j+2){
      stroke(100,j*15+20,255);
      line(i*50,j*50,i,j);
    }
  }
  for(var i=10;i<20;i=i+1){
    for(var j=0;j<25;j=j+1){
      fill (i*15+250,j*15,200)
      noStroke()
          ellipse(i*35+25,j*40-100,i+j*20)
    }
  }
  for(var i=10;i<20;i=i+1){
    for(var j=0;j<25;j=j+1){
      fill (0)
      ellipse(j*55-250,i*40+50,i+j*20)
    }
  }
}
