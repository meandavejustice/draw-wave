var drawWave = require('./index');
var canvas = document.createElement('canvas');
var container = document.createElement('div');
var AudioSource = require('audiosource');
var AudioContext = require('audiocontext');

canvas.width = 500;
canvas.height = 300;

document.body.appendChild(container);
container.appendChild(canvas);

var src = new AudioSource({
  context: new AudioContext(),
  url: 'girlfriend.mp3'
});

src.load(function() {
  var buf = src.buffer;
  drawWave.canvas(canvas, buf, '#000');
  container.appendChild(drawWave.svg(buf, 500, 300, '#000'));
});