var fs = require("fs");
var path = require("path");
var EPub = require("epub");
var util = require('util');
var epubFolder = "epubs";

fs.readdir(epubFolder, function(err, files) {
  files.forEach (function(file, index) {
    var epub = new EPub("epubs/" + file);

    epub.on("end", function(err){
      var epubFilename = path.basename(file, '.epub')

      fs.mkdir(epubFilename, (err) => {
        if (err) throw err;
        console.log('The folder has been created!');
      });

      var writePath = epubFilename + "/index.json";

      fs.writeFile(writePath, util.inspect(epub.metadata), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    });
    epub.parse();
  });
});
