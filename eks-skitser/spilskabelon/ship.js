function Ship() {
  this.x = width/2;

  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, height-20, 20, 60);
  }

  this.moveX = function(howmuch) {
    this.x += howmuch;
  }
}