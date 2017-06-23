import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

const FormCancel = ({ label, history }) =>
  <FlatButton label={label} onTouchTap={() => history.goBack()} style={styles.button} />;

const styles = {
  button: {
    marginLeft: 20,
  },
};

FormCancel.defaultProps = {
  label: 'Cancel',
};

FormCancel.propTypes = {
  label: PropTypes.string,
};

export default withRouter(FormCancel);
