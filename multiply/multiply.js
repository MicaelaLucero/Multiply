const fs = require("fs");
const colors = require('colors')

let listTable = (base, limit = 10) => {

  console.log('=================='.green);
  console.log(`tabla de ${ base }`.green);
  console.log('=================='.green);

  for (let i = 1; i <= limit; i++) {
      console.log(`${ base } * ${ i } = ${ base * i }`)
  }
};

createFile = (base, limit = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`The value entered ${base} is not a number`);
      return;
    }

    let data = "";

    for (let i = 1; i <= limit; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tables/table-${base}-al-${limit}.txt`, data, err => {
      if (err) reject(err);
      else resolve(`table-${base}-al-${limit}.txt`);
    });
  });
};

module.exports = {
  createFile, listTable
};
