import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Header, getTheme } from '../../src';

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

stories.add('styled', () =>
  <Header
    title={<div style={styles.styledBrand}>Header</div>}
    style={styles.styledHeader}
  />);

stories.add('brand without logo on left', () => <Header left={BrandWithoutLogo} />);

stories.add('brand without logo on title', () => <Header title={BrandWithoutLogo} />);

stories.add('brand without logo on right', () => <Header right={BrandWithoutLogo} />);

stories.add('brand with logo on left', () => <Header left={BrandWihLogo} />);

stories.add('brand with logo on title', () => <Header title={BrandWihLogo} />);

stories.add('brand with logo on right', () => <Header right={BrandWihLogo} />);

const styles = {
  styledHeader: {
    boxShadow: 0,
    background: getTheme().palette.primary1Color,
  },
  styledBrand: {
    color: '#FFF',
  },
};
