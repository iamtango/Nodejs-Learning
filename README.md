## express --no-view . OR npx express-generator

```javascript
globalThis === global;
```

### Modules are protected by default and it is use to protect their variables and functions from leaking

## Middleware is nothing but the initial checks before the actual execution of the function.

## app.use(express.json()) is use for getting body object whenever the post request is made.

- Program in running state is called process

---

# CMD IMP Commands

### `source` `ps1` `echo`

## Thread

- In nodejs Thread is swpan(start) by the `process` it it best to use thread instead of process it ti light weighted it take memory from the process and it is faster than running the `process`
- we can create thread by using

```javascript
const { Worker } = require("worker_thread");
new Worker("./worker.js");
```

- when the process is started then the process having atleast one default thread called Main thread at the time of stating
- Node.js is mainly single-threaded, running JavaScript on a single thread with an event loop, ideal for I/O-bound tasks. However, it can be multi-threaded using libuv's thread pool for background tasks and the worker_threads module for parallel execution, allowing it to handle CPU-intensive tasks while keeping the main event loop single-threaded.

<h3>Concurrency</h3>
<h3>Parallelism</h3>

### we can create new environment variable by using `export VAR_NAME = VALUE` it will run and saved in env by running this program but to read the value from the env use `process.env` and assign in another variable

# child_process

- To Execute any command in Nodejs we have to use

```javascript
const { exec } = require("child_process");
exec("Command_NAME_TO_EXECUTE");
```

## Intro to common js module system

- It is synchronous in nature

## Module.exports vs exports

```javascript
module.exports === exports; // true
```

## Module Wrapper function (IIFE)

nodejs uses iife to wrap the whole function

```js
(function (exports, require, module, __filename, __dirname) {
  // Your module code here
})(exports, require, module, __filename, __dirname);
```

### `thats why the scope of the nodejs file is local scope and`

you can even write "use strict" inside the function as well

# custom required function

- we can create custom functions to replace the require function but using require function🫠.
- Internally nodejs uses cpp code to require and the files but we can use required function for demonstration purposes

### to execute the string use the `eval` function

### If you use common js then only the `Localscope` can be created if you use Es6 Module then instead of local scope the module scope is created

### common js me file name extension me koi validation nahi but Es6 modules me hai

### `import.meta` is whole one property which return whole new object and it is accessible only when using Es6 Module

in the latest version of nodejs or from 20 you can see multiple properties but before that if you use import.meta then you only get `url` property inside the import.meta but after 20 you can see multiple properties like `filename` dirname`and`resolve ` property and you can also add your own properties customized properties

- `dirname` give the directory from where the code is running
- process.cwd() give the current working directory

# Difference between common js and ES6 modules

- Common js

  - Load file Synchronously
  - cjs import are hoisted
  - we cannot use `await` keyword without using async function we have to wrap it first using IIFE if needed(top level await is not allowed)
  - Only one value can be exported
  - File Extension is optional(if we give full path the we can load any file using cjs)
  - value of `this` keyword is equal to/ points to the module.exports property
  - we can get file name using \_\_filename
  - strict mode is not enabled by default

- ES6 modules
  - Load file Asynchronous
  - mjs import are hoisted
  - we can use `await` keyword without using async function(top level await is allowed)
  - Multiple value can be exported
  - File Extension is mandatory( only js and mjs files are allowed)
  - set type= module inside the package.json file to use ES6 modules
  - value of `this` keyword is undefined
  - we can get file name using import.meta.filename
  - strict mode is enabled by default

```javascript
export default !== module.exports
export !== exports
```

## NPM Modules

- Those modules which are present inside the npm_modules are called npm modules
