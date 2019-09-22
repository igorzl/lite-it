import { fabric } from 'fabric';

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
      },
      function(item, object) {
        object.set('id', item.getAttribute('id'));
        group.push(object);
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

const addRectangle = () => {
  var rect = new fabric.Rect({
    top: 100,
    left: 100,
    width: 60,
    height: 70,
    fill: 'black'
  });

  canvas.add(rect);
};

const addWindow = () => {
  fabric.loadSVGFromURL(
    'https://res.cloudinary.com/dkjjz54zd/image/upload/v1568898175/sunlight_wt2ugn.svg',
    function(objects, options) {
      var loadedObjects = fabric.util.groupSVGElements(objects, options);
      loadedObjects.set({
        left: 480,
        top: 500,
        scaleX: 1,
        scaleY: 1
      });
      canvas.add(loadedObjects);
      canvas.renderAll();
    }
  );
};

const addBackground = () => {
  fabric.loadSVGFromURL(
    'https://res.cloudinary.com/dkjjz54zd/image/upload/v1568898167/background_wtu5nq.svg',
    function(objects, options) {
      var loadedObjects = fabric.util.groupSVGElements(objects, options);
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
};

const addCorner = () => {
  fabric.loadSVGFromURL(
    'https://res.cloudinary.com/dkjjz54zd/image/upload/v1568898167/corner_szqagi.svg',
    function(objects, options) {
      var loadedObjects = fabric.util.groupSVGElements(objects, options);
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
};

const addFlash1 = () => {
  fabric.loadSVGFromURL(
    'https://res.cloudinary.com/dkjjz54zd/image/upload/v1568898167/flash-1_lgz4ag.svg',
    function(objects, options) {
      var loadedObjects = fabric.util.groupSVGElements(objects, options);
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
};

const addFlash2 = () => {
  fabric.loadSVGFromURL(
    'https://res.cloudinary.com/dkjjz54zd/image/upload/v1568898167/flash-2_ijchde.svg',
    function(objects, options) {
      var loadedObjects = fabric.util.groupSVGElements(objects, options);
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
};

const addFlash3 = () => {
  fabric.loadSVGFromURL(
    'https://res.cloudinary.com/dkjjz54zd/image/upload/v1568898167/flash-3_ymrwmu.svg',
    function(objects, options) {
      var loadedObjects = fabric.util.groupSVGElements(objects, options);
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
};

const addRing = () => {
  fabric.loadSVGFromURL(
    'https://res.cloudinary.com/dkjjz54zd/image/upload/v1568898169/ring_hksgjn.svg',
    function(objects, options) {
      var loadedObjects = fabric.util.groupSVGElements(objects, options);
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
};

const addSoftbox = () => {
  fabric.loadSVGFromURL(
    'https://res.cloudinary.com/dkjjz54zd/image/upload/v1568898175/softbox_zdmqzo.svg',
    function(objects, options) {
      var loadedObjects = fabric.util.groupSVGElements(objects, options);
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
};

// Adding eventlistemners for objects

let addRectBtn = document.getElementById('rectangle-btn');
addRectBtn.addEventListener('click', addRectangle);
let addWindowBtn = document.getElementById('window-btn');
addWindowBtn.addEventListener('click', addWindow);
let addBackgroundBtn = document.getElementById('background-btn');
addBackgroundBtn.addEventListener('click', addBackground);
let addCornerBtn = document.getElementById('corner-btn');
addCornerBtn.addEventListener('click', addCorner);
let addFlash1Btn = document.getElementById('flash1-btn');
addFlash1Btn.addEventListener('click', addFlash1);
let addFlash2Btn = document.getElementById('flash2-btn');
addFlash2Btn.addEventListener('click', addFlash2);
let addFlash3Btn = document.getElementById('flash3-btn');
addFlash3Btn.addEventListener('click', addFlash3);
let addRingBtn = document.getElementById('ring-btn');
addRingBtn.addEventListener('click', addRing);
let addSoftboxBtn = document.getElementById('softbox-btn');
addSoftboxBtn.addEventListener('click', addSoftbox);
