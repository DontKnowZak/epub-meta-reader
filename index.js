var fs = require("fs");
var path = require("path");
var EPub = require("epub");
var epub = new EPub("Test Epubs/1.epub");
var epubFolder = "epubs"

fs.readdir(epubFolder, function(err, files) {
  files.forEach (function(file, index) {
    console.log(file);
  })
})
epub.on("end", function(err){
  console.log(epub.metadata);
});

epub.parse();
