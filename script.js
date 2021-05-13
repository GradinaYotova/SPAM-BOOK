Splitting();

$( ".char" ).hover(
  function() {
    var rgb = [
        // parseInt(Math.random() * 255),
        // parseInt(Math.random() * 167),
        // parseInt(Math.random() * 50)

        parseInt(Math.random() * 165),
        parseInt(Math.random() * 207),
        parseInt(Math.random() * 220)
      ];
      $(this).css('color', 'rgb(' + [255-rgb[0], 255-rgb[1], 255-rgb[2]].join(',') + ')');
  });


$(".char").mouseout(
  function() {
  $(this).css('color','#000');
  }
);