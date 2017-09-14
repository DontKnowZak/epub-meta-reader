var fs = require("fs");
var path = require("path");
var EPub = require("epub");
var epubFolder = "epubs"

fs.readdir(epubFolder, function(err, files) {
  files.forEach (function(file, index) {
    var epub = new EPub("epubs/" + file);
    epub.on("end", function(err){
      console.log(epub.metadata);
    });
    epub.parse();
  })
})
