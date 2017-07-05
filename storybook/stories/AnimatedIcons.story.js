import React, { Component } from 'react';
import { storiesOf } from '@kadira/storybook';

import IconButton from 'material-ui/IconButton';
import { AnimatedIcons } from '../../src';

const stories = storiesOf('AnimatedIcons', module);

stories.addDecorator(story =>
  <div style={styles.wrapper}>
    <div style={styles.icons}>{story()}</div>
  </div>
);

class StatefullButton extends Component {
  state = this.props.initialState;

  onTouchTap() {
    this.setState(this.props.onTouchTap(this.state));
  }

  render() {
    return (
      <div style={styles.icon}>
        <IconButton onTouchTap={() => this.onTouchTap()}>
          <this.props.icon {...this.state} />
        </IconButton>
      </div>
    );
  }
}

stories.add('default', () =>
  <StatefullButton
    icon={AnimatedIcons.Menu}
    initialState={
      { opened: false }
    }
    onTouchTap={state => (
      { opened: !state.opened }
    )}
  />,
);

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  icons: {
    borderTop: '1px solid #eee',
    borderRight: '1px solid #eee',
  },
  icon: {
    padding: 5,
    borderBottom: '1px solid #eee',
    borderLeft: '1px solid #eee',
  }
};
