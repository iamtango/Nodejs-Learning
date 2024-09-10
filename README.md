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

## to execute the string use the eval function

# If you use common js then only the localscope can be created if you use Es6 module then instead of local scope the module scope is created

# common js me file name extension me koi validation nahi but Es6 modules me hai
