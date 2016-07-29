# json-stringify-plus

> Convert your JSON objects to a JSON string with single or double quotes.

## Install

```bash
$ npm install --save json-stringify-plus
```

## Usage

```js
const jsonStringifyPlus = require('json-stringify-plus');

const data = {
  foo: 'foo',
};

const doubleQuotes = jsonStringifyPlus(data);
// {"foo":"foo"}

const singleQuotes = jsonStringifyPlus(data, { single: true });
// {'foo':'foo'}}
```

## License

MIT © [Vu Tran](https://github.com/vutran/)
