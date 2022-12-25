import fs from 'fs';
import path from 'path';

const diffFinder = (filepath1, filepath2) => {
  const file1 = JSON.parse(fs.readFileSync(path.resolve(filepath1)));
  const file2 = JSON.parse(fs.readFileSync(path.resolve(filepath2)));
  const allFile = {};
  const keys1 = Object.keys(file1);
  for (const key of keys1) {
    if (file1[key] === file2[key]) {
      allFile[`  ${key}`] = file1[key];
    } else if (!Object.prototype.hasOwnProperty.call(file2, key)) {
      allFile[`- ${key}`] = file1[key];
    }
    const keys2 = Object.keys(file2);
    for (const item of keys2) {
      if (Object.prototype.hasOwnProperty.call(file1, item) && file1[item] !== file2[item]) {
        allFile[`- ${item}`] = file1[item];
        allFile[`+ ${item}`] = file2[item];
      } else if (!Object.prototype.hasOwnProperty.call(file1, item)) {
        allFile[`+ ${item}`] = file2[item];
      }
    }
  }
  JSON.stringify(allFile, null, 2);
  return allFile;
};

export default diffFinder;
