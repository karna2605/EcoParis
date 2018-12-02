function getColour(d){
    return  d > 200 ? 'e31a1c':
            d > 150 ? 'fc4e2a':
            d > 100 ? 'fd8d3c':
            d > 50 ? 'feb24c':
                      'ffffcc';
}

var processColour = function(binaryData, l, width, height, pixels, shift, voronoiContainmentData, interCommContainmentData, voronoi_means, voronoi_counts , voronoi_hist, interComm_means, interComm_counts, interComm_hist, firstVoronoiByInterComm, bounds){


  const original_tl_lat = 49.2485668
  const original_tl_lng = 1.4403262

  const original_br_lat = 48.1108602
  const original_br_lng = 3.5496114

  const original_width = 1977
  const original_height = 1590

  //console.log(voronoi_hist)
  console.log(bounds)
  var  voronoiInInterCommCount = []
  for (var i=0; i<l; i++) {

      var px = i%width
      var py = Math.floor(i/width)

      if(px >= 0 && px < width && py >= 0 && py < height){
          var pos = i*4

          var value = pixels[shift + i]

          //careful here! our data is always between image_width and image_height (well, inside this rectangle), but the containment
          //data was always between default_tl and default_br, so we have to compute the location in this referential before sampling
          //the containment data!

          var current_tx = px / (width - 1) //between 0 and 1 included
          var current_ty = py / (height - 1)

          var current_lng = (1-current_tx) * bounds.tl_lng + current_tx * bounds.br_lng
          var current_lat = (1-current_ty) * bounds.tl_lat + current_ty * bounds.br_lat

          var original_tx = (current_lng - original_tl_lng) / (original_br_lng - original_tl_lng) //between 0 and 1, included (should anyway)
          var original_ty = (original_tl_lat - current_lat) / (original_tl_lat - original_br_lat)

          var original_px = Math.floor(original_tx * (original_width - 1))
          var original_py = Math.floor(original_ty * (original_height - 1)) //in the original image, the one that generated the containment data


          var voronoi_id = 0
          var interComm_id = 0

          if (original_px >= 0 && original_py >= 0 && original_px < original_width && original_py < original_width){ 
            var containment_index = original_px + original_py * original_width

            voronoi_id = voronoiContainmentData[shift + containment_index]
            interComm_id = interCommContainmentData[shift + containment_index]
          }// else, this image is bigger, this pixel is outside! so in no voronoi or interComm..

          

          if (containment_index >= original_width * original_height || containment_index < 0){ //if this pixel was outside the
            console.log("oops")
          }
          //console.log(containment_index,px,py)

          

          if (voronoi_id != 0){
            voronoi_counts[voronoi_id-1] += 1
            voronoi_means[voronoi_id-1] += value
            voronoi_hist[voronoi_id-1].push(value)
          }

          if (interComm_id != 0){
            interComm_counts[interComm_id-1] += 1
            interComm_means[interComm_id-1] += value
            interComm_hist[interComm_id-1].push(value)
          }

          if (voronoi_id != 0 && interComm_id != 0){ //voronoi inside an interComm, is it the first one?

            while (interComm_id - 1 >= voronoiInInterCommCount.length){
              voronoiInInterCommCount[voronoiInInterCommCount.length] = []
            }

            while (voronoi_id - 1 >= voronoiInInterCommCount[interComm_id-1].length){
              voronoiInInterCommCount[interComm_id - 1][voronoiInInterCommCount[interComm_id - 1].length] = 0
            }

            voronoiInInterCommCount[interComm_id - 1][voronoi_id - 1] += 1
            /*if (firstVoronoiByInterComm[interComm_id-1] > voronoi_id - 1){
              firstVoronoiByInterComm[interComm_id-1] = voronoi_id - 1
            }*/
          }

          binaryData[pos+2]   = parseInt(getColour(value),16) & 255
          binaryData[pos+1]   = (parseInt(getColour(value),16) >> 8) & 255
          binaryData[pos]   = (parseInt(getColour(value),16) >> 16) & 255
          if (pixels[shift + i]==0){
              binaryData[pos+3]=0; // alpha (transparency)
          }
          else{
              binaryData[pos+3]=220;
          }
      }
  }

  console.log(voronoiInInterCommCount)
  voronoiInInterCommCount.forEach((p,i) => {
    var index = 100000
    p.forEach((d,j) => { //first index where greater than a given value
      if (d > 20 && j < index){
        index = j
      }
    })
    firstVoronoiByInterComm[i]=index
  })
}

self.addEventListener('message', function(e) {
  if (e.data.canvasData == null){
    return //it might be another type of message, don't handle it
  }
  var canvasData = e.data.canvasData;
  var binaryData = canvasData.data;
  var width = e.data.width;
  var height = e.data.height;
  var pixels = e.data.pixels;
  var voronoiContainmentData = e.data.voronoiContainmentData
  var interCommContainmentData = e.data.interCommContainmentData
  var numVoronois = e.data.numVoronois
  var numInterComms = e.data.numInterComms
  var tl_lat = e.data.tl_lat
  var tl_lng = e.data.tl_lng
  var br_lat = e.data.br_lat
  var br_lng = e.data.br_lng

  var l = e.data.length;
  var index = e.data.index;

  //initalize means and counts arrays
  var voronoi_means = []
  var voronoi_counts = []
  var voronoi_hist = {}

  for (var i=0; i<numVoronois; ++i){
    voronoi_counts[i] = 0
    voronoi_means[i] = 0
    voronoi_hist[i] = []
  }

  var interComm_means = []
  var interComm_counts = []
  var interComm_hist = {}

  for (var i=0; i<numInterComms; ++i){
    interComm_counts[i] = 0
    interComm_means[i] = 0
    interComm_hist[i] = []
  }

  var firstVoronoiByInterComm = []

  for (var i=0; i<numInterComms; ++i){
    firstVoronoiByInterComm[i]=10000 // bigger than the max, which is around 670
  }

  processColour(binaryData,l,width,height,pixels, l*index, voronoiContainmentData, interCommContainmentData, voronoi_means, voronoi_counts ,voronoi_hist,interComm_means, interComm_counts, interComm_hist, firstVoronoiByInterComm,
                {tl_lat:tl_lat,
                tl_lng:tl_lng,
                br_lat:br_lat,
                br_lng:br_lng})

  self.postMessage({result: canvasData,
                    index: index,
                    voronoi_means:voronoi_means,
                    voronoi_counts:voronoi_counts,
                    voronoi_hist:voronoi_hist,
                    interComm_means:interComm_means,
                    interComm_counts:interComm_counts,
                    interComm_hist:interComm_hist,
                    firstVoronoiByInterComm:firstVoronoiByInterComm });
}, false);
