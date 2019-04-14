var app = angular.module('myApp', []);

app.controller('jsonList', function($scope, $http) {
  $http.get('albums2.json').then(function(response) {
    $scope.albums = response.data;
  });

  $scope.currentAlbum = "album1";

  $scope.changeAlbum= function(albumName) {
        $scope.currentAlbum = albumName;
        jQuery('#gallery').trigger("reset");
        console.log(jQuery('#gallery').nanogallery2.items)

    };

});



jQuery(document).ready(function () {
  jQuery("#gallery").nanogallery2( {
    thumbnailHeight:  150,
    thumbnailWidth: "auto",
    thumbnailAlignment: 'center',
    itemsBaseURL: 'https://nanogallery2.nanostudio.org/samples/',
    colorScheme: {
      thumbnail: {
        borderColor: "rgba(255,255,255,1)"
      }
    },
    thumbnailLabel: {
      display: false
    },
    thumbnailHoverEffect2: "imageScaleIn80|labelAppear75",
    thumbnailAlignment: "center",
    galleryDisplayMode: "pagination",
    galleryMaxRows: 3,
    galleryPaginationMode: "rectangles",
    items: [
      { src: 'berlin1.jpg', srct: 'berlin1.jpg', title: 'Berlin 1' },
      { src: 'berlin2.jpg', srct: 'berlin2_t.jpg', title: 'Berlin 2' },
      { src: 'berlin3.jpg', srct: 'berlin3_t.jpg', title: 'Berlin 3' },
      { src: 'berlin1.jpg', srct: 'berlin1_t.jpg', title: 'Berlin 1' },
      { src: 'berlin2.jpg', srct: 'berlin2_t.jpg', title: 'Berlin 2' },
      { src: 'berlin3.jpg', srct: 'berlin3_t.jpg', title: 'Berlin 3' },
      { src: 'berlin1.jpg', srct: 'berlin1_t.jpg', title: 'Berlin 1' },
      { src: 'berlin2.jpg', srct: 'berlin2_t.jpg', title: 'Berlin 2' },
      { src: 'berlin3.jpg', srct: 'berlin3_t.jpg', title: 'Berlin 3' },
      { src: 'berlin1.jpg', srct: 'berlin1_t.jpg', title: 'Berlin 1' },
      { src: 'berlin2.jpg', srct: 'berlin2_t.jpg', title: 'Berlin 2' },
      { src: 'berlin3.jpg', srct: 'berlin3_t.jpg', title: 'Berlin 3' },
      { src: 'berlin1.jpg', srct: 'berlin1_t.jpg', title: 'Berlin 1' },
      { src: 'berlin2.jpg', srct: 'berlin2_t.jpg', title: 'Berlin 2' },
      { src: 'berlin3.jpg', srct: 'berlin3_t.jpg', title: 'Berlin 3' },
      { src: 'berlin1.jpg', srct: 'berlin1_t.jpg', title: 'Berlin 1' },
      { src: 'berlin2.jpg', srct: 'berlin2_t.jpg', title: 'Berlin 2' },
      { src: 'berlin3.jpg', srct: 'berlin3_t.jpg', title: 'Berlin 3' },
      { src: 'berlin1.jpg', srct: 'berlin1_t.jpg', title: 'Berlin 1' },
      { src: 'berlin2.jpg', srct: 'berlin2_t.jpg', title: 'Berlin 2' },
      { src: 'berlin3.jpg', srct: 'berlin3_t.jpg', title: 'Berlin 3' }
    ]
  });


});
