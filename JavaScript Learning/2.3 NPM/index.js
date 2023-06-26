const fs = require("fs");

fs.writeFile("message,tx", "Hello from Node.js!", (err) => {
    if (err) throw err;
    console.log("The files has been saved!");
});