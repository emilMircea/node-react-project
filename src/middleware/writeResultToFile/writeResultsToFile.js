import fs from 'fs'

const writeResultFile = (filePath, avg) => fs.writeFile(filePath, `gen-rat-avg: ${avg}`, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Average result has been written to file');
  }
})

export default writeResultFile
