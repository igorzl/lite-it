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
    fabric.loadSVGFromURL(
      'https://res.cloudinary.com/dkjjz54zd/image/upload/v1569161984/subject_position_pveqoj.svg',
      function(objects, options) {
        var loadedObjects = fabric.util.groupSVGElements(objects, options);
        loadedObjects.set({
          left: 480,
          top: 300,
          scaleX: 0.5,
          scaleY: 0.5
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
  var text = new fabric.Textbox('Enter text', {
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

document.addEventListener('keydown', e => {
  if (
    e.key === 'Backspace' &&
    canvas.getActiveObjects()[0].text === undefined
  ) {
    removeSelected();
  }
});

// SAVING
let addSaveBtn = document.getElementById('save-btn');
addSaveBtn.addEventListener('submit', e => {
  e.preventDefault();

  const canvas_json = document.querySelector('#canvas_json');
  const canvas_svg = document.querySelector('#canvas_svg');

  canvas_json.value = JSON.stringify(canvas.toJSON());
  canvas_svg.value = canvas.toSVG();
  addSaveBtn.submit();
  console.log(canvas_svg.value);
  setTimeout(() => {
    document.getElementById('save-submit').disabled = false;
  }, 100);
});

// DRAWING MODE
const drawingMode = () => {
  console.log('drawing mode toggle');
  canvas.isDrawingMode = !canvas.isDrawingMode;
  if (canvas.isDrawingMode) {
    addDrawingBtn.innerHTML = '<p>Stop drawing</p>';
  } else {
    addDrawingBtn.innerHTML = '<p>Drawing mode</p>';
  }
};
let addDrawingBtn = document.getElementById('drawing-mode-btn');
addDrawingBtn.addEventListener('click', drawingMode);

// ADD OBJECTS TO CANVAS
// Takes link from the canvas-objects.js according to the name written inside the button.
// If you change name - change the key for the link
const addObject = link => {
  fabric.loadSVGFromURL(link, function(objects, options) {
    var loadedObjects = fabric.util.groupSVGElements(objects, options);
    loadedObjects.set({
      left: fabric.util.getRandomInt(50, 300),
      top: fabric.util.getRandomInt(100, 500),
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
    console.log(targetEquip['Subject Position']);
    addObject(targetEquip[e.target.innerHTML]);
  });
});
