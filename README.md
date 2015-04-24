# draw-wave

Render a wave form from a web audio buffer to canvas or svg element.

[![NPM](https://nodei.co/npm/draw-wave.png?downloads=true)](https://npmjs.org/package/draw-wave)

## Usage

#### Render to Canvas
``` javascript
var drawBuffer = require('draw-wave');

drawBuffer.canvas(document.querySelector('.my-canvas'), audiobuffer, '#52F6A4');
```

#### Generate SVG
``` javascript
var drawBuffer = require('draw-wave');

var waveSVG = drawBuffer.svg(audiobuffer, 500, 300, '#52F6A4');
document.appendChild(waveSVG);
```
This will look produce something like this
![](./girlfriend.png)
[here is the song](https://www.youtube.com/watch?v=GWMCSimyD6I)

[og canvas version](https://github.com/cwilso/Audio-Buffer-Draw)
