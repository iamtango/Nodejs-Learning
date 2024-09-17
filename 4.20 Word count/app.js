import { readFile } from "node:fs/promises";

const filePath = process.argv[2];
const perticularWord = process.argv[3];
// const fileContent = await readFile("./file-1.txt", "utf-8");
const fileContent = await readFile(filePath, "utf-8");
// console.log(fileContent.split(/[\W]/).filter((w) => w));
const wordsArray = fileContent.split(/[\W]/).filter((w) => w);

const wordCount = {};

wordsArray.forEach((word) => {
  if (word in wordsArray) {
    wordCount[word] += 1;
  } else {
    wordCount[word] = 1;
  }
});
console.log(wordCount[perticularWord]);
// console.log(wordCount);
