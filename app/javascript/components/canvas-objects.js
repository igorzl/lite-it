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

const addCorner = () => {
  var group = [];
  fabric.loadSVGFromURL(
    '/assets/corner.svg',
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

const addFlash1 = () => {
  var group = [];
  fabric.loadSVGFromURL(
    '/assets/flash-1.svg',
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

const addFlash2 = () => {
  var group = [];
  fabric.loadSVGFromURL(
    '/assets/flash-2.svg',
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

const addFlash3 = () => {
  var group = [];
  fabric.loadSVGFromURL(
    '/assets/flash-3.svg',
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

const addRing = () => {
  var group = [];
  fabric.loadSVGFromURL(
    '/assets/ring.svg',
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

const addSoftbox = () => {
  var group = [];
  fabric.loadSVGFromURL(
    '/assets/softbox.svg',
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

export {
  addRectangle,
  addWindow,
  addBackground,
  addCorner,
  addFlash1,
  addFlash2,
  addFlash3,
  addRing,
  addSoftbox
};
