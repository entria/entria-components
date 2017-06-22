import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Error, Loading } from '../../src';

const stories = storiesOf('Utils', module);

stories.add('Error', () => <Error error={{ message: 'This is a fake error.' }} />);

stories.add('Loading', () => <Loading />);
