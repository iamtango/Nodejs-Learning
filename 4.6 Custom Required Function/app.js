const a = loadModule("./math.js");
const { sum } = loadModule("./sum.js");
console.log(a);
console.log(sum(1, 2, 34, 5, 56, 77));

function loadModule(path) {
  const fs = require("fs");
  const fileContent = fs.readFileSync(path).toString();

  return (function (send) {
    // Your module code here
    eval(fileContent);
    return send;
  })({});
}
