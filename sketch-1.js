 // this variable will hold our shader object
 let theShader;
 // this variable will hold our webcam video
 let cam;

 function preload(){
   // load the shader
   theShader = loadShader('vert.txt','frag.txt');
 }

var w = window.innerWidth;
var h = window.innerHeight;  

 function setup() {
   // shaders require WEBGL mode to work
   createCanvas(w, h, WEBGL);
   noStroke();
   cam = createCapture(VIDEO);
   cam.size(w,h);
   cam.hide();
 }
 function draw() {
   // shader() sets the active shader with our shader
   shader(theShader);
   // passing cam as a texture
   theShader.setUniform('tex0', cam);
   // rect gives us some geometry on the screen
   rect(0,0,w,h);
 }

/*
function mousePressed(){
	save('pix.jpg');
}
*/
 
