angular.module('video-player')

  .component('videoPlayer', {
    controller: function() {
      this.source = function(videoId) {
        return 'https://www.youtube.com/embed/' + videoId;
      };
    },
    bindings: {
      video: '<',
      currentVideo: '<',
      searchResults: '<'
    },
    templateUrl: 'src/templates/videoPlayer.html'
  });
