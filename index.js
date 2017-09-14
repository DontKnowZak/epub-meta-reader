var EPub = require("epub");
var epub = new EPub("Test Epubs/1.epub");

epub.on("end", function(err){
  console.log(epub.metadata);
});

epub.parse();
