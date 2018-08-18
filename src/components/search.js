angular.module('video-player')

  .component('search', {
    controller: () => {
      this.result = function() {};
    },
    templateUrl: 'src/templates/search.html' 
  });
