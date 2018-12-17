if(window.innerWidth >= 768){
var dots = [],
    mouse = {
      x: 0,
      y: 0
    };

var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "tail";
    document.body.appendChild(n);
    return n;
  }());
};
Dot.prototype.draw = function() {
  this.node.style.left = this.x + 8 + "px";
  this.node.style.top = this.y + 8 +"px";
};

var d = new Dot();
var b = new Dot();
dots.push(d);
dots.push(b);

function draw() {
  var x = mouse.x,
      y = mouse.y;
  
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    
    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .9;
    y += (nextDot.y - dot.y) * .9;

  });
  b.x += 0.5;
  b.y += 0.5;
}

document.addEventListener("mousemove", function(event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});

function animate() {
  draw();
  requestAnimationFrame(animate);
}

animate();
}