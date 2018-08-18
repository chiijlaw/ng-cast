angular.module('video-player')

  .component('app', {
    controller: function ($scope, youTube) {
      
      this.selectVideo = function(video) {
        //this.currentVideo = video;
      },
      this.searchResults = q => {
        var options = {
          key: YOUTUBE_API_KEY,
          maxResults: 5,
          q: q,
          part: 'snippet',
          videoEmbeddable: 'true',
          type: 'video'
        }
          youTube.search(options, (data) => {
          console.log(data.data.items[0])
          console.log('this', this)
          this.videos = data.data.items
          this.video = data.data.items[0]
          return(data.data.items)

        }
      )
      
      },
      // this.$onInit = function() {
      //   this.videos = this.searchResults('dogs');
      // }
      this.video = window.exampleVideoData[0],
      this.videos = window.exampleVideoData,
      this.currentVideo = window.exampleVideoData[0],
      this.onClick = (index) => {
        this.video = this.videos[index];
      }
      // this.result = (a) => {
      //   this.videos = youTubeResult
      // }
      // this.searchResults();
    },
    bindings: {
    },
    templateUrl: 'src/templates/app.html', 
    
  },
  
);
// .component('selectVideo', {

// });