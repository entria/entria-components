import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { white } from 'material-ui/styles/colors';
import { deepConcat } from '../utils/objects';

const LOCAL_STORAGE_CONFIG = 'v1-customTheme';

const defaultConfig = {
  fontFamily: '"Montserrat", sans-serif',
  palette: {
    primary1Color: '#2B8CE9',
    primary2Color: '#FC615D',
    primary3Color: '#FE9958',
    accent1Color: '#129ACA',
    accent2Color: '#1598CE',
    accent3Color: '#999999',
    textColor: '#4F4F4F',
  },
  appBar: {
    height: 100,
    color: white,
    textColor: '#000',
    padding: 0,
  },
  drawer: {
    color: white,
    width: 300,
  },
};

export function createTheme(customConfig) {
  localStorage.setItem(LOCAL_STORAGE_CONFIG, JSON.stringify(customConfig));

  const config = deepConcat(defaultConfig, customConfig);

  return getMuiTheme(config);
}

const customConfig = localStorage.getItem(LOCAL_STORAGE_CONFIG)
  ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_CONFIG))
  : {};

const config = deepConcat(defaultConfig, customConfig);

export default getMuiTheme(config);
