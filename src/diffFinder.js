import fs from 'fs';
import path from 'path';

const diffFinder = (filepath1, filepath2) => {
  const file1 = JSON.parse(fs.readFileSync(path.resolve(filepath1)));    
  const file2 = JSON.parse(fs.readFileSync(path.resolve(filepath2)));
  const allFile = {};
  const keys1 = Object.keys(file1);
  for (let key of keys1) {
    if (file1[key] === file2[key]) {
      allFile[`  ${key}`] = file1[key]
    } else if (!file2.hasOwnProperty(key)) {
      allFile[`- ${key}`] = file1[key];
    }
    const keys2 = Object.keys(file2);
    for (let key of keys2) {
      if (file1.hasOwnProperty(key) && file1[key] !== file2[key]) {
        allFile[`- ${key}`] = file1[key];
        allFile[`+ ${key}`] = file2[key];
      } else if (!file1.hasOwnProperty(key)) {
        allFile[`+ ${key}`] = file2[key];
      }
    }
  }
  JSON.stringify(allFile, null, 2);
  return allFile;
};

export default diffFinder;