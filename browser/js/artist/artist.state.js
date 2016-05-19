juke.config(function($stateProvider){
  $stateProvider.state('artists', {
    url: '/artists',
    templateUrl: '/js/artist/artists.template.html',
    controller: 'ArtistsCtrl',
    resolve: {
      artists: function(ArtistFactory){
        return ArtistFactory.fetchAll()
      }
    }
  });
  $stateProvider.state('artist', {
    url: '/artist/:artistId',
    templateUrl: '/js/artist/artist.template.html',
    controller: 'ArtistCtrl',
    resolve: {
      artist: function(ArtistFactory, $stateParams){
        return ArtistFactory.fetchById($stateParams.artistId)
      }
    }
  })
  .state('artist.albums', {
    url: '/albums',
    templateUrl: '/js/artist/childstates/albums.template.html',
    controller: 'ArtistCtrl'
  })
  .state('artist.songs', {
    url: '/songs',
    templateUrl: '/js/artist/childstates/songs.template.html',
    controller: 'ArtistCtrl'
  })
});
