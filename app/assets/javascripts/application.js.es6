// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require activestorage
//= require_tree .
//= require waveform-data/dist/waveform-data
//= require peaks.js/peaks

(() => {
  let waveformInstance = peaks.init({
    container: document.getElementById('peaksContainer'),
    mediaElement: document.querySelector('#waveformAudio'),
    dataUri: {
      json: './peaks.json'
    },
    zoomLevels: [512, 1024, 2048, 4096]
  });

  const btnZoomIn = document.getElementById('zoomIn');
  const btnZoomOut = document.getElementById('zoomOut');

  btnZoomIn.addEventListener('click', zoomIn);

  btnZoomOut.addEventListener('click', zoomOut);

  function zoomIn() {
    waveformInstance.zoom.zoomIn();
  }

  function zoomOut() {
    waveformInstance.zoom.zoomOut();
  }
})();