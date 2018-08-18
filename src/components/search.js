angular.module('video-player')

  .component('search', {
    controller: () => {
      // this.result = function() {};
      // this.$onInit = function() {
      //   this.search()
      // }
    },
    templateUrl: 'src/templates/search.html',
    bindings: {
      search: '<',
      result: '<',
      selectVideo: '<'
    }
  });
