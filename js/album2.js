jQuery(document).ready(function () {
  jQuery("#gallery").nanogallery2( {
    thumbnailHeight:  150,
    thumbnailWidth: "auto",
    thumbnailAlignment: "center",
    itemsBaseURL: "https://nanogallery2.nanostudio.org/samples/",
    colorScheme: {
      thumbnail: {
        borderColor: "rgba(255,255,255,1)"
      }
    },
    thumbnailLabel: {
      display: true,
      hideIcons: true
    },
    thumbnailHoverEffect2: "imageScaleIn80|labelAppear75",
    thumbnailAlignment: "center",
    galleryDisplayMode: "pagination",
    galleryMaxRows: 3,
    galleryPaginationMode: "rectangles",
    galleryThemecolorScheme : "light",
    viewerTools : { topRight: "closeButton"},
    items: [
      // album 1
      { src: "berlin1.jpg", title: "album 1",  ID: 1,	kind:"album" },
      { src: "berlin1.jpg", srct: "berlin1_t.jpg", ID: 10, albumID: 1 },
      { src: "berlin2.jpg", srct: "berlin2_t.jpg", ID: 11, albumID: 1 },
      { src: "berlin3.jpg", srct: "berlin3_t.jpg", ID: 12, albumID: 1 },

      // album 2
      {	src: "berlin3.jpg", title: "album 2",  ID: 2,  kind:"album" },
      { src: "berlin3.jpg", srct: "berlin3_t.jpg", ID: 20, albumID: 2 },
      { src: "berlin2.jpg", srct: "berlin2_t.jpg", ID: 21, albumID: 2 },
      { src: "berlin1.jpg", srct: "berlin1_t.jpg", ID: 22, albumID: 2 }

    ]
  });


});
