import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

import Theme from './Theme';

class ThemeProvider extends Component {
  static childContextTypes = {
    showSnackbar: PropTypes.func,
  };

  state = {
    snackbar: {
      message: '',
      action: 'OK',
      duration: 8000,
    },
  };

  getChildContext() {
    return {
      showSnackbar: this.handleSnackbar,
    };
  }

  handleSnackbar = ({ message, action = 'OK', duration = 4000 }) => {
    this.setState({
      snackbar: {
        message,
        action,
        duration,
      },
    });
  };

  handleSnackbarConfirm = () => {
    this.setState({
      snackbar: {
        ...this.state.snackbar,
        message: '',
      },
    });
  };

  render() {
    const { snackbar } = this.state;
    const { children } = this.props;

    return (
      <MuiThemeProvider muiTheme={Theme}>
        <div>
          {children}

          <Snackbar
            open={!!snackbar.message}
            message={snackbar.message}
            action={snackbar.action}
            autoHideDuration={snackbar.duration}
            onActionTouchTap={this.handleSnackbarConfirm}
            onRequestClose={this.handleSnackbarConfirm}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default ThemeProvider;
