const fs = require('fs');

const wstream = fs.createWriteStream('./file3.tsv');

const fakeDataGenerator = (i) => {
  for (; i <= 10000000; i++) {
    let id = i;
    if (!wstream.write(id + '\n')) {
      wstream.once('drain' , () => fakeDataGenerator(i + 1));
      return;
    }
  }
  wstream.end();
};

fakeDataGenerator(1);
