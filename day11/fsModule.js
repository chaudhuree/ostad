//the fs.readFileSync() Method
const fs = require("fs");
const path = require("path");
// Calling the readFileSync() method
// to read 'input.txt' file
const dataFile = fs.readFileSync("./input.txt", { encoding: "utf8" });

// Display the file data
console.log(dataFile);

//------------------ 😎😎 😎😎 😎😎 😎😎 ------------------
// ------------------ 😁😁 😁😁 😁😁 😁😁 -----------------
// ------------------ 😊😊 😊😊 😊😊 😊😊 -----------------
// ------------------ 🎉🎉 🎉🎉 🎉🎉 🎉🎉 -----------------

// the fs.readFile() method

fs.readFile("Demo.txt", "utf8", function (err, data) {
  // Display the file content
  console.log(data);
});

console.log("readFile called");

//------------------ 😎😎 😎😎 😎😎 😎😎 ------------------
// ------------------ 😁😁 😁😁 😁😁 😁😁 -----------------
// ------------------ 😊😊 😊😊 😊😊 😊😊 -----------------
// ------------------ 🎉🎉 🎉🎉 🎉🎉 🎉🎉 -----------------

// fs.writeFile() method
let data = "This is a file containing a collection of books.";

fs.writeFile("books.txt", data, (err) => {
  if (err) console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("books.txt", "utf8"));
  }
});

//------------------ 😎😎 😎😎 😎😎 😎😎 ------------------
// ------------------ 😁😁 😁😁 😁😁 😁😁 -----------------
// ------------------ 😊😊 😊😊 😊😊 😊😊 -----------------
// ------------------ 🎉🎉 🎉🎉 🎉🎉 🎉🎉 -----------------

// fs.writeFileSync() method

let writeData = `This is a file containing a collection \n of programming languages.\n 1. C\n2. C++\n3. Python`;

fs.writeFileSync("programming.txt", writeData);
console.log("File written successfully\n");
console.log("The written has the following contents:");
console.log(fs.readFileSync("programming.txt", "utf8"));

//------------------ 😎😎 😎😎 😎😎 😎😎 ------------------
// ------------------ 😁😁 😁😁 😁😁 😁😁 -----------------
// ------------------ 😊😊 😊😊 😊😊 😊😊 -----------------
// ------------------ 🎉🎉 🎉🎉 🎉🎉 🎉🎉 -----------------

// The fs.readdirSync() method is used to synchronously read the contents of a given directory.
// The method returns an array with all the file names or objects in the directory.
// The options argument can be used to change the format in which the files are returned from the method.

// fs.readdirSync() method

// Function to get current filenames
// in directory
filenames = fs.readdirSync(__dirname);

console.log("\nCurrent directory filenames:");
filenames.forEach((file) => {
  console.log(file);
});

//------------------ 😎😎 😎😎 😎😎 😎😎 ------------------
// ------------------ 😁😁 😁😁 😁😁 😁😁 -----------------
// ------------------ 😊😊 😊😊 😊😊 😊😊 -----------------
// ------------------ 🎉🎉 🎉🎉 🎉🎉 🎉🎉 -----------------

// fs.readdirSync() method

// Function to get current filenames
// in directory with specific extension
files = fs.readdirSync(__dirname);

console.log("Filenames with the .txt extension:");
files.forEach((file) => {
  if (path.extname(file) == ".txt") console.log(file);
});

//------------------ 😎😎 😎😎 😎😎 😎😎 ------------------
// ------------------ 😁😁 😁😁 😁😁 😁😁 -----------------
// ------------------ 😊😊 😊😊 😊😊 😊😊 -----------------
// ------------------ 🎉🎉 🎉🎉 🎉🎉 🎉🎉 -----------------

// fs.renameSync() method
//
// // List all the filenames before renaming
// getCurrentFilenames();
//
// // Rename the file
// fs.renameSync('hello.txt', 'world.txt');
//
// // List all the filenames after renaming
// getCurrentFilenames();
//
// // function to get current filenames in directory
// function getCurrentFilenames() {
//     console.log("Current filenames:");
//     fs.readdirSync(__dirname).forEach(file => {
//         console.log(file);
//     });
// }

//------------------ 😎😎 😎😎 😎😎 😎😎 ------------------
// ------------------ 😁😁 😁😁 😁😁 😁😁 -----------------
// ------------------ 😊😊 😊😊 😊😊 😊😊 -----------------
// ------------------ 🎉🎉 🎉🎉 🎉🎉 🎉🎉 -----------------

// fs.rename() method
//
// // List all the filenames before renaming
// getCurrentFilenames();
//
// // Rename the file
// fs.rename('hello.txt', 'world.txt', () => {
//     console.log("\nFile Renamed!\n");
//
// // List all the filenames after renaming
//     getCurrentFilenames();
// });
//
// // Function to get current filenames
// // in directory
// function getCurrentFilenames() {
//     console.log("Current filenames:");
//     fs.readdirSync(__dirname).forEach(file => {
//         console.log(file);
//     });
// }

//------------------ 😎😎 😎😎 😎😎 😎😎 ------------------
// ------------------ 😁😁 😁😁 😁😁 😁😁 -----------------
// ------------------ 😊😊 😊😊 😊😊 😊😊 -----------------
// ------------------ 🎉🎉 🎉🎉 🎉🎉 🎉🎉 -----------------

// The fs.rm() method is used to delete a file at the given path.
// It can also be used recursively to remove directories.

// List files before deleting
// getCurrentFilenames();
//
// fs.rm('./dummy.txt', { recursive:true }, (err) => {
//     if(err){
//         // File deletion failed
//         console.error(err.message);
//         return;
//     }
//     console.log("File deleted successfully");
//
//     // List files after deleting
//     getCurrentFilenames();
// })
//
// // This will list all files in current directory
// function getCurrentFilenames() {
//     console.log("\nCurrent filenames:");
//     fs.readdirSync(__dirname).forEach(file => {
//         console.log(file);
//     });
//     console.log("");
// }

//------------------ 😎😎 😎😎 😎😎 😎😎 ------------------
// ------------------ 😁😁 😁😁 😁😁 😁😁 -----------------
// ------------------ 😊😊 😊😊 😊😊 😊😊 -----------------
// ------------------ 🎉🎉 🎉🎉 🎉🎉 🎉🎉 -----------------

// // fs.rmSync
// getCurrentFilenames();
// fs.rmSync('./dummy.txt');
//
// // List files after deleting
// getCurrentFilenames();
//
// // This will list all files in current directory
// function getCurrentFilenames() {
//     console.log("\nCurrent filenames:");
//     fs.readdirSync(__dirname).forEach(file => {
//         console.log(file);
//     });
//     console.log("fs.rmSync");
// }

//------------------ 😎😎 😎😎 😎😎 😎😎 ------------------
// ------------------ 😁😁 😁😁 😁😁 😁😁 -----------------
// ------------------ 😊😊 😊😊 😊😊 😊😊 -----------------
// ------------------ 🎉🎉 🎉🎉 🎉🎉 🎉🎉 -----------------

// fs.exists() method

fs.exists("./Demo.txt", (exists) => {
  console.log(exists ? "Found" : "Not Found!");
});

//------------------ 😎😎 😎😎 😎😎 😎😎 ------------------
// ------------------ 😁😁 😁😁 😁😁 😁😁 -----------------
// ------------------ 😊😊 😊😊 😊😊 😊😊 -----------------
// ------------------ 🎉🎉 🎉🎉 🎉🎉 🎉🎉 -----------------

// fs.existsSync() method

let fileExists = fs.existsSync("hello.txt");
console.log("hello.txt exists:", fileExists);

fileExists = fs.existsSync("world.txt");
console.log("world.txt exists:", fileExists);

//------------------ 😎😎 😎😎 😎😎 😎😎 ------------------
// ------------------ 😁😁 😁😁 😁😁 😁😁 -----------------
// ------------------ 😊😊 😊😊 😊😊 😊😊 -----------------
// ------------------ 🎉🎉 🎉🎉 🎉🎉 🎉🎉 -----------------

// The fs.unlink() method is used to remove a file or symbolic link from the filesystem.
// This function does not work on directories,
// therefore it is recommended to use fs.rmdir() to remove a directory.

// fs.unlink() method
//
// // Get the files in current directory
// // before deletion
// getFilesInDirectory();
//
// // Delete example_file.txt
// fs.unlink("example_file.txt", (err => {
//     if (err) console.log(err);
//     else {
//         console.log("\nDeleted file: example_file.txt");
//
//         // Get the files in current directory
//         // after deletion
//         getFilesInDirectory();
//     }
// }));
//
// // Function to get current filenames
// // in directory with specific extension
// function getFilesInDirectory() {
//     console.log("\nFiles present in directory:");
//     let files = fs.readdirSync(__dirname);
//     files.forEach(file => {
//         console.log(file);
//     });
// }

//------------------ 😎😎 😎😎 😎😎 😎😎 ------------------
// ------------------ 😁😁 😁😁 😁😁 😁😁 -----------------
// ------------------ 😊😊 😊😊 😊😊 😊😊 -----------------
// ------------------ 🎉🎉 🎉🎉 🎉🎉 🎉🎉 -----------------

// fs.unlinkSync() method

// // Get the files in current directory
// // before deletion
// getFilesInDirectory();
//
// // Delete readme.md
// fs.unlinkSync("readme.md");
// console.log("\nFile readme.md is deleted");
//
// // Get the files in current directory
// // after deletion
// getFilesInDirectory();
//
// // Function to get current filenames
// // in directory with specific extension
// function getFilesInDirectory() {
//     console.log("\nFiles present in directory:");
//     let files = fs.readdirSync(__dirname);
//     files.forEach(file => {
//         console.log(file);
//     });
// }
