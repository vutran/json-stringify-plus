import test from 'ava'; // eslint-disable-line
import jsonStringifyPlus from '.';

test('converts double quotes', t => {
  const data = {
    foo: 'foo',
  };
  t.is(jsonStringifyPlus(data), '{"foo":"foo"}');
});

test('converts single quotes', t => {
  const data = {
    foo: 'foo',
  };
  t.is(jsonStringifyPlus(data, { single: true }), "{'foo':'foo'}");
});
