import diffFinder from "./diffFinder.js";
import parse from "./parse.js";

const genDiff = (filepath1, filepath2) => {
  const differenceObj = diffFinder(filepath1, filepath2);
  const parsedObj = parse(differenceObj);
  return parsedObj;
};

export default genDiff;


