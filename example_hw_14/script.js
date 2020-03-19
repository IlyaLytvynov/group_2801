const _0x50d1 = [
  'classList',
  'random',
  'background',
  'add',
  'body',
  'append',
  'rgb(',
  'addEventListener',
  'style',
  'floor',
  'createElement'
];
(function(_0x494bca, _0x50d1c6) {
  const _0xe60d1a = function(_0x9ba6f9) {
    while (--_0x9ba6f9) {
      _0x494bca['push'](_0x494bca['shift']());
    }
  };
  _0xe60d1a(++_0x50d1c6);
})(_0x50d1, 0x198);
const _0xe60d = function(_0x494bca, _0x50d1c6) {
  _0x494bca = _0x494bca - 0x0;
  let _0xe60d1a = _0x50d1[_0x494bca];
  return _0xe60d1a;
};
const getRandomNumber = _0x2110a5 => {
  return Math[_0xe60d('0x8')](Math[_0xe60d('0x0')]() * _0x2110a5);
};
const getRandomColor = () => {
  return (
    _0xe60d('0x5') +
    getRandomNumber(0xff) +
    ',\x20' +
    getRandomNumber(0xff) +
    ',\x20' +
    getRandomNumber(0xff) +
    ')'
  );
};
function garland(_0x48e72f) {
  let _0x1f7b83 = document['querySelector'](_0xe60d('0x3'));
  for (let _0x297c15 = 0x0; _0x297c15 < _0x48e72f; _0x297c15++) {
    const _0x1ad87b = document[_0xe60d('0x9')]('button');
    _0x1ad87b[_0xe60d('0xa')][_0xe60d('0x2')]('lamp');
    _0x1ad87b[_0xe60d('0x7')][_0xe60d('0x1')] = getRandomColor();
    _0x1f7b83[_0xe60d('0x4')](_0x1ad87b);
  }
}
btn[_0xe60d('0x6')]('click', () => {
  let _0x560f2a = Number(prompt('Ennter\x20count', 0x0));
  while (isNaN(_0x560f2a)) {
    _0x560f2a = Number(
      prompt('Enter\x20only\x20numbers!\x20Enter\x20count\x20again', 0x0)
    );
  }
  garland(_0x560f2a);
});
