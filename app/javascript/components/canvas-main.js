import { fabric } from 'fabric';

var canvas = new fabric.Canvas('canvas');

// Adding objects
var rect = new fabric.Rect({
  top: 100,
  left: 100,
  width: 60,
  height: 70,
  fill: 'red'
});

function addRectangle() {
  canvas.add(rect);
  console.log(rect);
}

let addRectBtn = document.getElementById('rectangle-btn');
addRectBtn.addEventListener('click', addRectangle);

// Adding text

var text = new fabric.Textbox('Lorum ipsum dolor sit amet', {
  left: 50,
  top: 50,
  width: 150,
  fontSize: 20
});

function addTextbox() {
  canvas.add(text);
}

let addTextBtn = document.getElementById('text-btn');
addTextBtn.addEventListener('click', addTextbox);
