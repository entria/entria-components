import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

const MenuIcon = ({ opened, size, spaces, color }) => {
  const linesHeight = size * 3;
  const spacesHeight = size * spaces * 3;
  const height = linesHeight + spacesHeight;

  const styles = {
    wrapper: css({
      height,
      position: 'relative',
      transform: 'rotate(0deg)',
      transition: '.5s ease-in-out',
      '> span': {
        display: 'block',
        position: 'absolute',
        left: 0,
        width: '100%',
        height: size,
        borderRadius: size,
        background: color,
        opacity: 1,
        transform: 'rotate(0deg)',
        transition: '.25s ease-in-out',
      },
      '> span:nth-child(1)': {
        top: 0,
      },
      '> span:nth-child(2), > span:nth-child(3)': {
        top: size * spaces * 2,
      },
      '> span:nth-child(4)': {
        top: size * spaces * 4,
        width: '80%',
      },
    }),
    opened: css({
      '> span:nth-child(1), > span:nth-child(4)': {
        top: size * spaces * 1.5,
        width: 0,
        left: '50%',
      },
      '> span:nth-child(2)': {
        transform: 'rotate(45deg)',
      },
      '> span:nth-child(3)': {
        transform: 'rotate(-45deg)',
      },
    }),
  };

  return (
    <div className={`${styles.wrapper} ${opened ? styles.opened : ''}`}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

MenuIcon.defaultProps = {
  opened: false,
  size: 2,
  spaces: 1.5,
  color: '#323232',
};

MenuIcon.propTypes = {
  opened: PropTypes.bool,
  size: PropTypes.number,
  spaces: PropTypes.number,
  color: PropTypes.string,
};

export default MenuIcon;
