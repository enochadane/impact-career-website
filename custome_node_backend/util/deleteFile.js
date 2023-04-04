const fs = require("fs");

const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`File ${filePath} has been deleted.`);
    }
  });
};

module.exports = deleteFile;
