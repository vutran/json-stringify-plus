/**
 * Convert your JSON objects to a JSON string with single or double quotes.
 *
 * @param {Object} data
 * @param {Object} options
 */
const jsonStringifyPlus = (data, options) => {
  const defaults = {
    single: false,
  };
  const opts = Object.assign({}, defaults, options);

  if (opts.single) {
    const str = Object.keys(data).map(key => `'${key}':'${data[key]}'`);
    return `{${str}}`;
  }

  return JSON.stringify(data);
};

module.exports = jsonStringifyPlus;
