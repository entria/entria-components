import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Header } from '../../src';

const stories = storiesOf('Header', module);

const BrandWithoutLogo = <Header.Brand title="Entria" subtitle="Tech" />;

const BrandWihLogo = (
  <Header.Brand
    title="Entria"
    subtitle="Tech"
    image="https://avatars1.githubusercontent.com/u/23662721"
  />
);

stories.add('default', () => <Header title="Header" />);

stories.add('brand without logo on left', () => <Header left={BrandWithoutLogo} />);

stories.add('brand without logo on title', () => <Header title={BrandWithoutLogo} />);

stories.add('brand without logo on right', () => <Header right={BrandWithoutLogo} />);

stories.add('brand with logo on left', () => <Header left={BrandWihLogo} />);

stories.add('brand with logo on title', () => <Header title={BrandWihLogo} />);

stories.add('brand with logo on right', () => <Header right={BrandWihLogo} />);
