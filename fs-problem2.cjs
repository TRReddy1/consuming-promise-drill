/*
    Problem 2:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Read the given file lipsum.txt
        2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt
        3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt
        4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt
        5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.
*/

const { error } = require("console");
const { readFile } = require("fs");

const fs = require("fs").promises;

function problem2() {
  fs.readFile("./lipsum.txt", "utf-8")
    .then((data) => {
      data = data.toUpperCase();
      return fs.writeFile("./Upper.txt", data);
    })
    .then(() => {
      console.log("upper file created");
      return fs.appendFile("./filenames.txt", "./Upper.txt");
    })
    .then(() => {
      console.log("Upper appended");
      return fs.readFile("./Upper.txt", "utf-8");
    })
    .then((data) => {
      data = data.toLowerCase().replaceAll(".", ".\n");
      return fs.writeFile("./sentences.txt", data);
    })
    .then(() => {
      console.log("sentences created");
      return fs.appendFile("./filenames.txt", "\n./sentences.txt");
    })
    .then(() => {
      console.log("sentences appended");
      return fs.readFile("./sentences.txt", "utf-8");
    })
    .then((data) => {
      data = data.split(".").sort().join().trim();
      return fs.writeFile("./sorted.txt", data);
    })
    .then(() => {
      console.log("sorted created");
      return fs.appendFile("./filenames.txt", "\n./sorted.txt");
    })
    .then(() => {
      console.log("sorted appended");
      return fs.readFile("./filenames.txt", "utf-8");
    })
    .then((data) => {
      data.split("\n").forEach((file) => {
        fs.unlink(file)
          .then(() => console.log(file + " deleted"))
          .catch((error) => console.error(error));
      });
    })
    .catch((error) => console.error(error));
}

module.exports = problem2;
