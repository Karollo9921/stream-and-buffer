const fs = require('fs');

const readStream = fs.createReadStream('./text.txt');
const writeStream = fs.createWriteStream('./text2.txt');

// readStream.on('data', (chunk) => {
//   console.log('----------- NEW CHUNK ----------')
//   console.log(chunk);
//   writeStream.write('\nNEW CHUNK\n')
//   writeStream.write(chunk)
// });

readStream.pipe(writeStream)