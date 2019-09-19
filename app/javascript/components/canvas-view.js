import { fabric } from 'fabric';

var canvas = new fabric.Canvas('canvas', {
  isDrawingMode: false
});
let canvasData = document.querySelector('#canvas').dataset;
canvas.loadFromJSON(
  canvasData.canvasJson,
  canvas.renderAll.bind(canvas),
  function(o, object) {
    object.set('selectable', false);
  }
);
