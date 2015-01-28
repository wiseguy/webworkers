self.addEventListener('message', function(e) {

    var imageDataArray = e.data.imageDataArray;
    var sliderValue = e.data.sliderValue;
    var layerType = e.data.layerType;
    var newImageDataArray = [];

    console.log(imageDataArray.length + " images");

    for (var k = 0; k < imageDataArray.length; k += 1) {
        console.log(k);

        var data = imageDataArray[k].data;

        for (var i = 0, n = data.length; i < n; i += 4) {
            var r = data[i],
                g = data[i + 1],
                b = data[i + 2];
            //console.log(g);
            if (layerType == "elev") {
                if (g > sliderValue) {
                    // If the green component value is higher than 150
                    // make the datael transparent because i+3 is the alpha component
                    // values 0-255 work, 255 is solid
                    data[i + 3] = 0;
                }

            }

            if (layerType == "slope") {
                if (b > sliderValue) {
                    // If the green component value is higher than 150
                    // make the datael transparent because i+3 is the alpha component
                    // values 0-255 work, 255 is solid
                    data[i + 3] = 0;
                }

            }

        };

    }

    self.postMessage({
        imageDataArray: imageDataArray
    });

}, false);