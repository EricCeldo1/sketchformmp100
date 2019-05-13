var objects = [];

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(0); 
  
  if(objects.length < 10) {
    var shape = int(random(2)); 
    var x = width/2 + random(-200, 200); 
    var y = height/2 + random(-200, 200);
    objects.push(new Figure(x, y, shape)); 
  }
  
  for(var i = 0; i < objects.length; i++) {
    
    objects[i].show();
  }
}

function mousePressed() {
  for(var i = 0; i < objects.length; i++) {
    
    objects[i].drag();
  }
  
}

function mouseReleased() {
  
  for(var i = 0; i < objects.length; i++) {
    objects[i].cancelDrag();
  }
}

class Figure {
  constructor(x, y, shape) {
    this.x = x; 
    this.y = y;
    this.l = 30; 
    this.r = random(255); 
    this.g = random(255); 
    this.b = random(255); 
    this.shape = shape; 
    this.dragging = false;
    
    this.offsetX = 0; 
    this.offsetY  = 0;
  }

  
  drag(x,y) {
   
    if(this.shape == 0) {
      var d = dist(mouseX, mouseY, this.x, this.y);
      if(d < this.l) {
        this.r = random(255); 
        this.g = random(255); 
        this.b = random(255); 
        fill(this.r, this.g, this.b);

        
        this.dragging = true;
        
        this.offsetX = this.x - mouseX;
        this.offsetY = this.y - mouseY;
      }
    } else if(this.shape == 1) { 
      if(mouseX >= this.x && mouseX <= this.x + this.l
        && mouseY >= this.y && mouseY <= this.y + this.l) {
        this.r = random(255); 
        this.g = random(255); 
        this.b = random(255); 
        fill(this.r, this.g, this.b);

        
        this.dragging = true;
        
        this.offsetX = this.x - mouseX;
        this.offsetY = this.y - mouseY;
      }
    } 
    
  }

  cancelDrag() {
    
    this.dragging = false
  }
  
  show() {
    stroke(255); 
    fill(this.r, this.g, this.b); 
    if(this.dragging) {
     
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;;
    }
    
    if(this.shape == 0) {
      ellipse(this.x, this.y, this.l); 
    } else if(this.shape == 1) {
      rect(this.x, this.y, this.l, this.l); 
    }
    
  }
}