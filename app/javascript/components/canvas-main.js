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
      '/assets/photo-camera.svg',
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
    fill: 'red'
  });

  canvas.add(rect);
};

const addWindow = () => {
  var group = [];
  fabric.loadSVGFromURL(
    '/assets/sunlight.svg',
    function(objects, options) {
      var loadedObjects = new fabric.Group(group);
      loadedObjects.set({
        left: 480,
        top: 500,
        scaleX: 1,
        scaleY: 1
      });
      canvas.add(loadedObjects);
      canvas.renderAll();
    },
    function(item, object) {
      object.set('id', item.getAttribute('id'));
      group.push(object);
    }
  );
};

const addBackground = () => {
  var group = [];
  fabric.loadSVGFromURL(
    '/assets/background.svg',
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
};

const addCorner = () => {
  var group = [];
  fabric.loadSVGFromURL(
    '/assets/corner.svg',
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
};

const addFlash1 = () => {
  var group = [];
  fabric.loadSVGFromURL(
    '/assets/flash-1.svg',
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
};

const addFlash2 = () => {
  var group = [];
  fabric.loadSVGFromURL(
    '/assets/flash-2.svg',
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
};

const addFlash3 = () => {
  var group = [];
  fabric.loadSVGFromURL(
    '/assets/flash-3.svg',
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
};

const addRing = () => {
  var group = [];
  fabric.loadSVGFromURL(
    '/assets/ring.svg',
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
};

const addSoftbox = () => {
  var group = [];
  fabric.loadSVGFromURL(
    '/assets/softbox.svg',
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
