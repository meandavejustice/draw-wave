var createEl = require('svg-create-element');

module.exports = drawBufferSVG;

function getRect(x, y, width, height, color) {
  return createEl('rect', {
    x: x,
    y: y,
    width: width,
    height: height,
    fill: color
  });
}

function drawBufferSVG(buffer, width, height, color) {
  if (!color) color = '#000';

  var svgEl = createEl('svg', {
    width: width,
    height: height
  });

  svgEl.style.display = "block";

  var g = createEl('g');

  svgEl.appendChild(g);

  var data = buffer.getChannelData( 0 );
  var step = Math.ceil( data.length / width );
  var amp = height / 2;
  for (var i=0; i < width; i++) {
    var min = 1.0;
    var max = -1.0;
    for (var j=0; j<step; j++) {
      var datum = data[(i*step)+j];
      if (datum < min)
        min = datum;
      if (datum > max)
        max = datum;
    }
    g.appendChild(getRect(i, (1+min)*amp, 1, Math.max(1,(max-min)*amp), color));
  }

  return svgEl;
}