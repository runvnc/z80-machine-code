import toBits from 'to-binary';
import {writeFileSync} from 'fs';

export const bits = str => parseInt(str, 2);
export const lg = console.log;

export const accumulator = '111';
export const registerA =   '111';
export const registerB =   '000';
export const B         =   '000';

export let outputBytes = [];

export const binOut = (data) => outputBytes.push(data);
export const toBuff = () => new Buffer(outputBytes);
export const saveBin = (fname) => writeFileSync(fname, toBuff());

// refer to Z80 CPU User Manual (UM008008-0116)
// available on zilog.com

// LD r, n   page 69
export function loadByteIntoRegister({data, register}) {
  binOut(bits(`00${register}110`));
  binOut(data);
}

// CALL nn  page 279
export function callRoutine({address}) {
  binOut(bits('11001101'));
  binOut((address & 0x00FF));
  binOut((address & 0xFF00) >> 8);
}

// RST p  page 290
export const callSystem = ({routine}) => binOut(bits(`11${routine}111`));
export const restart = callSystem;

// RET  page 283
export const return_ = () => binOut(bits('11001001'));

