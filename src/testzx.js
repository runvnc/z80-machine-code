import {loadByteIntoRegister, callRoutine, accumulator,
        callSystem, return_, lg, saveBin, toBuff} from './z80';

import {blueBorder, setBorderColor, selectChannel, screen,
        printCharacter} from './zxspectrum';

function printString(str) {
  for (let ch of str) {
    loadByteIntoRegister({data: ch.charCodeAt(), register: accumulator});
    callSystem({ routine: printCharacter });
  }
}

loadByteIntoRegister({data: blueBorder, register: accumulator});
callRoutine({ address: setBorderColor });

loadByteIntoRegister({data: screen, register: accumulator});
callRoutine({ address: selectChannel});

printString("Hello to Speccy from JavaScript.");

return_();

lg('Saving to tst.bin:');
lg(toBuff());

saveBin('tst.bin');

