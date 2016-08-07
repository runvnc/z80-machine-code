var _getIterator = require('babel-runtime/core-js/get-iterator')['default'];

var _z80 = require('./z80');

var _zxspectrum = require('./zxspectrum');

function printString(str) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _getIterator(str), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var ch = _step.value;

      (0, _z80.loadByteIntoRegister)({ data: ch.charCodeAt(), register: _z80.accumulator });
      (0, _z80.callSystem)({ routine: _zxspectrum.printCharacter });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator['return']) {
        _iterator['return']();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

(0, _z80.loadByteIntoRegister)({ data: _zxspectrum.blueBorder, register: _z80.accumulator });
(0, _z80.callRoutine)({ address: _zxspectrum.setBorderColor });

(0, _z80.loadByteIntoRegister)({ data: _zxspectrum.screen, register: _z80.accumulator });
(0, _z80.callRoutine)({ address: _zxspectrum.selectChannel });

printString("Hello to Speccy from JavaScript.");

(0, _z80.return_)();

(0, _z80.lg)('Saving to tst.bin:');
(0, _z80.lg)((0, _z80.toBuff)());

(0, _z80.saveBin)('tst.bin');