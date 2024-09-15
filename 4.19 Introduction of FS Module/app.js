// import fs from "node:fs";

// console.time();
// let i = 0;
// const timeId = setInterval(() => {
//   console.log(i++);
//   if (i === 2) {
//     clearInterval(timeId);
//     console.timeEnd();
//   }
// }, 5);
// const a = fs.readFileSync("../README.md", "utf-8");
// // console.log(a);

// fs.readFile("../README.md", "utf-8", (err, data) => {
//   console.log(data);
// });

import fs from "node:fs/promises";

console.time();
let i = 0;
const timeId = setInterval(() => {
  console.log(i++);
  if (i === 2) {
    clearInterval(timeId);
    console.timeEnd();
  }
}, 5);

const a = await fs.readFile("../README.md", "utf-8");
console.log(a);
