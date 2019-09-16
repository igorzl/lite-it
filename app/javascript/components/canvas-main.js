import { fabric } from 'fabric';

var canvas = new fabric.Canvas('canvas');

// Adding objects

function addRectangle() {
  var rect = new fabric.Rect({
    top: 100,
    left: 100,
    width: 60,
    height: 70,
    fill: 'red'
  });

  canvas.add(rect);
}

let addRectBtn = document.getElementById('rectangle-btn');
addRectBtn.addEventListener('click', addRectangle);

// Adding text

function addTextbox() {
  var text = new fabric.Textbox('Lorum ipsum dolor sit amet', {
    left: 50,
    top: 50,
    width: 150,
    fontSize: 20
  });
  canvas.add(text);
}

let addTextBtn = document.getElementById('text-btn');
addTextBtn.addEventListener('click', addTextbox);

// Delete selected

function removeSelected() {
  var activeObjects = canvas.getActiveObjects();
  canvas.discardActiveObject();
  if (activeObjects.length) {
    canvas.remove.apply(canvas, activeObjects);
  }
}

let addDeleteBtn = document.getElementById('delete-btn');
addDeleteBtn.addEventListener('click', removeSelected);

// Parsing svg to the canvas
var group = [];
fabric.loadSVGFromURL(
  'assets/photo-camera.svg',
  function(objects, options) {
    var loadedObjects = new fabric.Group(group);
    loadedObjects.set({
      left: 480,
      top: 500,
      scaleX: 0.1,
      scaleY: 0.1
    });
    canvas.add(loadedObjects);
    canvas.renderAll();
  },
  function(item, object) {
    object.set('id', item.getAttribute('id'));
    group.push(object);
  }
);

// Saving canvas to JSON string

let addSaveBtn = document.getElementById('save-btn');
addSaveBtn.addEventListener('click', saveCanvas);

function saveCanvas() {
  var json = JSON.stringify(canvas.toJSON());
  console.log(json);
}

// Save as an SVG image

function rasterize() {
  const svgSnapshot = canvas.toSVG();
  document.getElementById('bottom-navigation').innerHTML = svgSnapshot;
}

let addSvgBtn = document.getElementById('svg-btn');
addSvgBtn.addEventListener('click', rasterize);
