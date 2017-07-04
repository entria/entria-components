import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { white } from 'material-ui/styles/colors';
import { deepConcat } from '../utils/objects';

export function customize(config) {
  localStorage.setItem('customTheme', JSON.stringify(config));
}

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

const customConfig = localStorage.getItem('customTheme')
  ? JSON.parse(localStorage.getItem('customTheme'))
  : {};

const config = deepConcat(defaultConfig, customConfig);

export default getMuiTheme(config);
