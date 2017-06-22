import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Loading } from '../../src';

const stories = storiesOf('Utils', module);

stories.add('Loading', () => <Loading />);
