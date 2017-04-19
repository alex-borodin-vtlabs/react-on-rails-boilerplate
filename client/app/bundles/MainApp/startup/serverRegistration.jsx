// Example of React + Redux
import ReactOnRails from 'react-on-rails';

import MainApp from './serverMainApp';
import mainAppStore from '../store/mainAppStore';

ReactOnRails.register(
  {
    MainApp,
  },
);

ReactOnRails.registerStore({
  mainAppStore,
});
