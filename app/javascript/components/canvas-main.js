import { fabric } from 'fabric';
import { targetEquip } from './canvas-objects';

var canvas = new fabric.Canvas('canvas', {
  isDrawingMode: false
});

// Loading canvas New or canvas from DB
let loadCanvas = () => {
  let canvasData = document.querySelector('#canvas').dataset;
  if (canvasData.canvasJson != null) {
    canvas.loadFromJSON(canvasData.canvasJson, function() {
      canvas.renderAll();
      console.log('Load from db');
    });
  } else {
    console.log('Load new');
    var group = [];
    fabric.loadSVGFromURL(
      'https://res.cloudinary.com/dkjjz54zd/image/upload/v1568898172/photo-camera_xesj7w.svg',
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
      }
    );
  }
};
loadCanvas();

// Adding text

function addTextbox() {
  var text = new fabric.Textbox('Your note', {
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

// Saving canvas to JSON string
function saveCanvas() {
  return JSON.stringify(canvas.toJSON());
}

// Save as an SVG image
function rasterize() {
  return canvas.toSVG();
}

let addSaveBtn = document.getElementById('save-btn');
addSaveBtn.addEventListener('submit', e => {
  e.preventDefault();

  const canvas_json = document.querySelector('#canvas_json');
  const canvas_svg = document.querySelector('#canvas_svg');

  canvas_json.value = saveCanvas();
  canvas_svg.value = rasterize();
  addSaveBtn.submit();
  setTimeout(() => {
    document.getElementById('save-submit').disabled = false;
  }, 100);
});

const drawingMode = () => {
  console.log('drawing mode toggle');
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) {
    addDrawingBtn.innerHTML = 'Exit drawing mode';
  } else {
    addDrawingBtn.innerHTML = 'Drawing mode';
  }
};
let addDrawingBtn = document.getElementById('drawing-mode-btn');
addDrawingBtn.addEventListener('click', drawingMode);

// OBJECTS FOR CANVAS
const addObject = link => {
  fabric.loadSVGFromURL(link, function(objects, options) {
    var loadedObjects = fabric.util.groupSVGElements(objects, options);
    loadedObjects.set({
      left: fabric.util.getRandomInt(25, 950),
      top: fabric.util.getRandomInt(25, 550),
      scaleX: 0.5,
      scaleY: 0.5
    });
    canvas.add(loadedObjects);
    canvas.renderAll();
  });
};

const allEquipment = document.querySelectorAll('#equip');
allEquipment.forEach(eq => {
  eq.addEventListener('click', e => {
    addObject(targetEquip[e.target.innerHTML]);
  });
});

// Adding eventlistemners for objects
