// const fs = require("fs");
// const { resolve } = require("path");

const { error } = require("console");

// const prom = new Promise((resolve, reject) => {
//   fs.writeFile("./fs-problem2.cjs", "", (err) => {
//     if (err) {
//       reject(err);
//     } else {
//       resolve("file created");
//     }
//   });
// });

// const handelSuccess = (onFulfilled) => {
//   console.log(onFulfilled);
// };

// const handelFailure = (onRejected) => {
//   console.log(onRejected);
// };

// // prom.then(handelSuccess).catch(handelFailure);

// const promDir = new Promise((resolve, reject) => {
//   fs.mkdir("./test", (err) => {
//     if (err) {
//       reject(err);
//     } else {
//       resolve("dir created");
//     }
//   });
// });

// promDir.then(handelSuccess).catch(handelFailure);

const fsProm = require("fs").promises;

fsProm
  .writeFile("./test/testfsproblem2.cjs", "")
  .then(() => console.log("file created"))
  .catch((error) => console.error(error));
