import MasterState from './MasterState';
import ControlFunctions from './ControlFunctions';
import DatabaseFunctions from './DatabaseFunctions';

function keyInputs() {

  document.addEventListener('keyup', event => {
    switch (event.key) {
      case 'Enter':
        if (MasterState.modalWindowIsOpen) {
          DatabaseFunctions.saveProject();
        }
        break;
    }
  });

}

export default keyInputs;
