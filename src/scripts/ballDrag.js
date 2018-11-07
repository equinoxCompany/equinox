const Circle = function(x, y, radius) {
  this.x = x;
  this.y = y;
  this.radius = radius;
}

function collideCircle(circle1, circle2){
  let distance_x = circle1.x - circle2.x;
  let distance_y = circle1.y - circle2.y;

  let radii_sum = circle1.radius + circle2.radius;

  if(distance_x * distance_x + distance_y * distance_y <= radii_sum * radii_sum) return true;
  return false;
}

function resolveCircle(c1, c2){
    let distance_x = c1.x - c2.x;
    let distance_y = c1.y - c2.y;
    let radii_sum = c1.radius + c2.radius;
    let length = Math.sqrt(distance_x * distance_x + distance_y * distance_y) || 1;
    let unit_x = distance_x / length;
    let unit_y = distance_y / length;

    c1.x = c2.x + (radii_sum + 1) * unit_x;
    c1.y = c2.y + (radii_sum + 1) + unit_y;

}

function fillCircle(circle, color) {
  context.fillStyle = color;
  context.beginPath();
  //arc(centerX, centerY, radius, start_radian, stop_radian);
  context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  context.fill();
}

function strokeCircle(circle, color) {
  context.strokeStyle = color;
  context.beginPath();
  context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  context.stroke();
}

function handleInput(event) {
  /* Calling event.preventDefault is important so we don't scroll or scale
  when we interact with the canvas. We can call it because the event listener's
  passive property is set to false. */
  event.preventDefault();
  /* We need to know where the canvas is located in the browser window to
  get the offset position to subtract from the input location. */
  let canvas_rectangle = context.canvas.getBoundingClientRect();
  let x = undefined;
  let y = undefined;
  switch(event.type) {
    /* For any touch event, we must get the client position from the targetTouches array. */
    case "touchend": case "touchmove": case "touchstart":
    x = event.targetTouches[0].clientX;
    y = event.targetTouches[0].clientY;
    break;
    /* The default would be mouse events, and these just use clientX and clientY. */
    default:
    x = event.clientX;
    y = event.clientY;
  }
  /* Set circle1's position equal to the input position offset by the bounding rect of the canvas. */
  circle1.x = x - canvas_rectangle.left;
  circle1.y = y - canvas_rectangle.top;
  update();// draw everything to the screen
}

 /* Here we draw everything and we also test for collision with the collideCircle method. */
 function update() {
  /* Keep circle2 in the center of the canvas. */
  circle2.x = context.canvas.clientWidth  * 0.5;
  circle2.y = context.canvas.clientHeight * 0.5;
  let collision = false;
  if (collideCircle(circle1, circle2)) {// collision!
    resolveCircle(circle1, circle2);// Response!
    collision = true;
  }
  /* Set the output values. */
  length.innerHTML = Math.round(Math.sqrt(Math.pow(circle1.x - circle2.x, 2) + Math.pow(circle1.y - circle2.y, 2)));
  length.style.width = length.clientWidth + "px";
  sum_radii.innerHTML = circle1.radius + circle2.radius;
  sum_radii.style.width = sum_radii.clientWidth + "px";
  /* We have to reset the canvas height and width in case the p element
  gets resized. If it does the css will adjust the canvas height and skew
  the image inside. To combat this, we just get the computed width and height
  on each update. */
  context.canvas.height = context.canvas.clientHeight;
  context.canvas.width = context.canvas.clientWidth;
  /* Clear the canvas to gray. */
  context.fillStyle = "#283038";
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  if (collision) {
    strokeCircle(circle1, "#ffffff");
    strokeCircle(circle2, "#ffffff");
  } else {
    fillCircle(circle1, "#0080f0");
    fillCircle(circle2, "#f08000");
  }
  /* Draw the white line. */
  context.strokeStyle = "#ffffff";
  context.beginPath();
  context.moveTo(circle1.x, circle1.y);
  context.lineTo(circle2.x, circle2.y);
  context.stroke();
};

var circle1, circle2, context, length, sum_radii;
circle1   = new Circle(100, 100, 50);
circle2   = new Circle(100, 100, 50);
context   = document.querySelector("canvas").getContext("2d");
length    = document.getElementById("length");
sum_radii = document.getElementById("sum_radii");
/* We add all the input events to the canvas and use the same event handler.
passive:false is used to indicate that this input will override the normal
mouse and touch event actions that the browser might recognize as a scroll
or zoom command. */
context.canvas.addEventListener("mousedown",  handleInput, { passive:false });
context.canvas.addEventListener("mousemove",  handleInput, { passive:false });
context.canvas.addEventListener("mouseup",    handleInput, { passive:false });
context.canvas.addEventListener("touchend",   handleInput, { passive:false });
context.canvas.addEventListener("touchmove",  handleInput, { passive:false });
context.canvas.addEventListener("touchstart", handleInput, { passive:false });
window.addEventListener("resize", update);
update();
update();// The second call is used to position the yellow circle the right way.
