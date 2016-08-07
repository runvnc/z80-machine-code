var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.loadByteIntoRegister = loadByteIntoRegister;
exports.callRoutine = callRoutine;

var _toBinary = require('to-binary');

var _toBinary2 = _interopRequireDefault(_toBinary);

var _fs = require('fs');

var bits = function bits(str) {
  return parseInt(str, 2);
};
exports.bits = bits;
var lg = console.log;

exports.lg = lg;
var accumulator = '111';
exports.accumulator = accumulator;
var registerA = '111';
exports.registerA = registerA;
var registerB = '000';
exports.registerB = registerB;
var B = '000';

exports.B = B;
var outputBytes = [];

exports.outputBytes = outputBytes;
var binOut = function binOut(data) {
  return outputBytes.push(data);
};
exports.binOut = binOut;
var toBuff = function toBuff() {
  return new Buffer(outputBytes);
};
exports.toBuff = toBuff;
var saveBin = function saveBin(fname) {
  return (0, _fs.writeFileSync)(fname, toBuff());
};

exports.saveBin = saveBin;
// refer to Z80 CPU User Manual (UM008008-0116)
// available on zilog.com

// LD r, n   page 69

function loadByteIntoRegister(_ref) {
  var data = _ref.data;
  var register = _ref.register;

  binOut(bits('00' + register + '110'));
  binOut(data);
}

// CALL nn  page 279

function callRoutine(_ref2) {
  var address = _ref2.address;

  binOut(bits('11001101'));
  binOut(address & 0x00FF);
  binOut((address & 0xFF00) >> 8);
}

// RST p  page 290
var callSystem = function callSystem(_ref3) {
  var routine = _ref3.routine;
  return binOut(bits('11' + routine + '111'));
};
exports.callSystem = callSystem;
var restart = callSystem;

exports.restart = restart;
// RET  page 283
var return_ = function return_() {
  return binOut(bits('11001001'));
};
exports.return_ = return_;