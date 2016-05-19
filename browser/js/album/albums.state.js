juke.config(function($stateProvider){
  $stateProvider.state('albums', {
    url: '/albums',
    templateUrl: '/js/album/albums.template.html',
    controller: 'AlbumsCtrl'
  });
  $stateProvider.state('album', {
    url: '/albums/:albumId',
    templateUrl: '/js/album/album.template.html',
    controller: 'AlbumCtrl'
  });
})
