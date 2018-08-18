angular.module('video-player')
  .service('youTube', function ($http) {
    this.search = function(options, callback) {
      console.log('searching');
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: options
      }).then(callback);
    // return window.exampleVideoData;
    };
  });
