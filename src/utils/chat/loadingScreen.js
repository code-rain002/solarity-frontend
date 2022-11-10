// var sceneWrapperEl = document.getElementById('sceneWrapper');

// var loadingScreenEl = document.getElementById('loadingScreen');
// var loadingTextEl = document.getElementById('loadingText');
// var loadingBarEl = document.getElementById('loadingBar');

var models = [];
var modelsNumber;
var modelsLoaded = 0;
//builds loading screen when scene is not loaded
export function build_loadingScreen() {

}
//updates loading screen based on models actually loaded
export function update_loadingScreen() {
  models = document.querySelectorAll('[model-info]');
  modelsNumber = models.length;
  var loadingScreenEl = document.getElementById("loadingScreen");
  var sceneWrapperEl = document.getElementById("sceneWrapper");
  var loadingBars = document.getElementsByClassName("circle-loading-bar");
  var loadingStatus = document.getElementsByClassName("loading-status");

  setTimeout(function () {
    if(modelsLoaded != 0) {
      localStorage.setItem('modelLoaded', "true");
    }
    modelsLoaded = 0;
    models = [];
    modelsNumber = undefined;
    if (!!loadingScreenEl) loadingScreenEl.style.display = "none";
    if (sceneWrapperEl) sceneWrapperEl.style.opacity = 100;
  }, 60000);
  modelsLoaded++;
  if (loadingBars && loadingStatus) {
    for(var i = 0; i < loadingBars.length; i ++) {
      loadingBars[i].children[1].style.setProperty('--percent', Math.round((modelsLoaded * 100) / modelsNumber));
      loadingStatus[0].innerHTML = Math.round((modelsLoaded * 100) / modelsNumber);
    }
  }
  
  if (modelsLoaded == modelsNumber) {
    modelsLoaded = 0;
    models = [];
    modelsNumber = undefined;
    localStorage.setItem('modelLoaded', "true");
    if (!!loadingScreenEl) loadingScreenEl.style.display = "none";
    if (sceneWrapperEl) sceneWrapperEl.style.opacity = 100;
  }
}