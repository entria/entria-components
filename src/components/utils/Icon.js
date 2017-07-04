import React from 'react';
import FontIcon from 'material-ui/FontIcon';

const Icon = ({ children, ...props }) =>
  <FontIcon className="material-icons" children={children} {...props} />;

export default Icon;
