// Parsing SVG to the page with the element that contains id="#canas-svg"
// Just add to the page this:
// <div id="render-svg" data-canvas-svg="<%= @canvas.canvas_svg %>" style="background: white;"></div>
// Width and all sizing is controlled via css by the svg {} selector.

let loadSvg = () => {
  let canvas_svg = document.querySelectorAll('#render-svg');
  canvas_svg.forEach(cnvs => {
    var doc = new DOMParser().parseFromString(
      cnvs.dataset.canvasSvg,
      'image/svg+xml'
    );
    cnvs.appendChild(cnvs.ownerDocument.importNode(doc.documentElement, true));
  });
};
if (document.querySelector('#render-svg')) loadSvg();
