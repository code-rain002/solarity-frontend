export function updateScrollbar(startIndex, itemNumber, itemArray, offsetStart, offsetDelta) {
  let offset = {};
  offset.x = offsetStart.x;
  offset.y = offsetStart.y;
  for (let item of itemArray) {
      item.setAttribute('visible', "false");
  }
  for (var i = 0; i < itemNumber && i < itemArray.length; i++) {
      itemArray[i + startIndex].setAttribute('visible', "true");
      itemArray[i + startIndex].setAttribute('position', { x: offset.x, y: offset.y, z: 0.01 });
      offset.x = offset.x + offsetDelta.x;
      offset.y = offset.y + offsetDelta.y;
  }
}

export function intersected() {
  this.setAttribute('opacity', '0.5');
}

export function intersectedCleared() {
  this.setAttribute('opacity', '1.0');
}

export function chooseControls() {
  let url = new URL(window.location.href);
  let searchParams = new URLSearchParams(url.search);
  var controls = searchParams.get('controls');
  if (controls == "mouse") {
      document.querySelectorAll('.controllerOnly').forEach(e => e.remove());
  } else if (controls == "controller") {
      document.querySelectorAll('.mouseOnly').forEach(e => e.remove());
  }
}

export function passControls() {
  let url = new URL(window.location.href);
  let searchParams = new URLSearchParams(url.search);
  var controls = searchParams.get('controls');
  document.querySelectorAll('[simple-link]').forEach(e => e.components["simple-link"].attrValue.href += ("?controls=" + controls));
}
