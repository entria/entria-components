import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Form, Card } from '../../src';

const stories = storiesOf('Form', module);

stories.addDecorator(story => <div style={styles.wrapper}>{story()}</div>);

stories.add('default', () =>
  <Form>
    <Form.FieldSet>
      <Form.Input
        name="user"
        label="User"
        placeholder="User"
      />
      <Form.Input
        name="password"
        type="password"
        label="Password"
        placeholder="Password"
      />
    </Form.FieldSet>

    <Form.Actions>
      <Form.Submit />
    </Form.Actions>
  </Form>,
);

stories.add('within a card', () =>
  <Form>
    <Card>
      <Card.Header>Login</Card.Header>

      <Form.FieldSet>
        <Form.Input
          name="user"
          label="User"
          placeholder="User"
        />
        <Form.Input
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
        />
      </Form.FieldSet>

      <Card.Footer>
        <Form.Submit />
      </Card.Footer>
    </Card>
  </Form>,
);

const styles = {
  wrapper: {
    width: 480,
    height: 'auto',
    margin: '0 auto',
    padding: 20,
    boxSizing: 'border-box',
  },
};
