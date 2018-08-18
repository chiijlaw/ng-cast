angular.module('video-player')
  .component('videoList', {
    controller: function() {
      //this.onClick = (e) => { e; };
    },
    bindings: {
      videos: '<',
      onClick: '<',
      searchResults: '<'
    },
    templateUrl: 'src/templates/videoList.html'
  });
