var fs=require("fs");
var data=fs.readSync("README.md");
console.log(data.toString());
console.log("end");