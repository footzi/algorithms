const find = (array, callback) => {
  let counter = 0;

  if (!Array.isArray(array)) {
    throw TypeError('First argument is not array');
  }

  if (typeof callback !== 'function') {
    throw TypeError('Second argument is not function');
  }

  while (counter <= array.length) {
    if (callback(array[counter])) {
      return array[counter];
    }
    
    counter++;
  }

  return undefined;
};

module.exports = {
    find
}


const t = find(array, '');

console.log(t);
