export default function freeObjectFromMemory(object, domReference) {
  object.traverse(function(obj){
      if (obj.material) {
        if(obj.material.dispose) {
          obj.material.dispose();
        }
        if (obj.material.map) {
          obj.material.map.dispose();
        }
        if (obj.material.lightMap) {
          obj.material.lightMap.dispose();
        }
        if (obj.material.aoMap) {
          obj.material.aoMap.dispose();
        }
        if (obj.material.emissiveMap) {
          obj.material.emissiveMap.dispose();
        }
        if (obj.material.bumpMap) {
          obj.material.bumpMap.dispose();
        }
        if (obj.material.normalMap) {
          obj.material.normalMap.dispose();
        }
        if (obj.material.displacementMap) {
          obj.material.displacementMap.dispose();
        }
        if (obj.material.roughnessMap) {
          obj.material.roughnessMap.dispose();
        }
        if (obj.material.metalnessMap) {
          obj.material.metalnessMap.dispose();
        }
        if (obj.material.alphaMap) {
          obj.material.alphaMap.dispose();
        }
      }
      if (obj.geometry) {
        obj.geometry.dispose();
        obj.geometry.attributes.color = {};
        obj.geometry.attributes.normal = {};
        obj.geometry.attributes.position = {};
        obj.geometry.attributes.uv = {};
        obj.geometry.attributes = {};
        obj.material = {};
      }
      var elems = obj.children;
      for (var el of elems) {
        freeObjectFromMemory(el, null);
      }
  })

  for (var elem in THREE.Cache.files) {
    if (elem.startsWith('./assets/items/')) {
      THREE.Cache.files[elem] = "";
      THREE.Cache.remove(elem);
    }
  }
}