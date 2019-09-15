import 'bootstrap';
import { fabric } from 'fabric';

var canvas = new fabric.Canvas('canvas');

var rect = new fabric.Rect({
  top: 100,
  left: 100,
  width: 60,
  height: 70,
  fill: 'red'
});

canvas.add(rect);
