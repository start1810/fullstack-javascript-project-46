const parse = (obj, n = 1) => {
  let objParse = '{\n';
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === 'object') {
      obj[key] = parse(obj[key], n + 1);
    }
    const propertyString = `  ${key}: ${obj[key]}\n`;
    objParse += propertyString;
  }
  objParse += '}';
  return objParse;
};

const testObj = {
  sdf: 123,
  sdfasfsfe: 2345,
  dture: {
    e8ruwer: 215,
  },
};

console.log(parse(testObj));
console.log(Object.toString(testObj));

export default parse;
