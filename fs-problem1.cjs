/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 

    Ensure that the function is invoked as follows: 
        fsProblem1(absolutePathOfRandomDirectory, randomNumberOfFiles)
*/

const { rejects } = require("assert");
const { error } = require("console");
const { resolve } = require("path");

const fs = require("fs").promises;

function problem1(dirPath, numOfFiles) {
  createDir(dirPath)
    .then((result) => {
      console.log(result);
      let filePath = dirPath + "/file.json";
      createFiles(filePath, numOfFiles)
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
    })
    .catch((error) => console.error(error));
}

function createDir(dirPath) {
  return fs
    .mkdir(dirPath)
    .then(() => "Dir created")
    .catch((error) => error);
}

function createFiles(path, num) {
  if (num === 0) {
    return "All files created and deleted";
  }

  return fs
    .writeFile(path, "")
    .then(() => {
      console.log(`file ${num} created`);
      return deletion(path, num);
    })
    .catch((error) => error);
}

function deletion(path, num) {
  return fs
    .unlink(path)
    .then(() => {
      console.log(`file ${num} deleted`);
      num--;
      return createFiles(path, num);
    })
    .catch((error) => error);
}

//problem1("./jsonDir", 5);

module.exports = problem1;
