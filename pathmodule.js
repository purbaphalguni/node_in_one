const path = require("path");
const a1 = path.basename("C:\\temp\\myfile.html");
console.log(a1);
const a2 = path.dirname("C:\\temp\\myfile.html");
console.log(a2);
const a3 = path.extname(a1);
console.log(a3);
console.log(path.extname(__filename));
