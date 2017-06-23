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

stories.add('with createFromArray', () =>
  <Card>
    {Form.createFromArray(
      [
        {
          name: 'name',
          placeholder: 'Name',
          required: true,
        },
        {
          type: 'email',
          name: 'email',
          placeholder: 'Email',
          required: true,
        },
        {
          type: 'password',
          name: 'password',
          placeholder: 'Password',
          required: true,
        },
        {
          name: 'active',
          placeholder: 'Active',
          required: false,
          type: 'boolean',
        },
      ],
      {
        initialValues: {
          name: 'initial value',
        },
        onSubmit: (values) => console.log(values),
      }
    )}
  </Card>
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
