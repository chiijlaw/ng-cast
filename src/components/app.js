angular.module('video-player')

  .component('app', {
    controller: function ($scope, youTube) {
      this.selectVideo = function() {},
      this.searchResults = function() {},
      this.videos = window.exampleVideoData,
      this.video = window.exampleVideoData[0],
      this.currentVideo = window.exampleVideoData[0];
    },
    bindings: {
    },
    templateUrl: 'src/templates/app.html',
  
  });
// .component('selectVideo', {

// });