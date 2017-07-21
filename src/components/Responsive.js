// @flow
import { getTheme } from './Theme';

export const VIEWPORT: Object = {
  SMALL: getTheme().responsive.small || 480,
  MEDIUM: getTheme().responsive.medium || 768,
};

export const isSmall = (): boolean => window.innerWidth <= VIEWPORT.SMALL;

export const isMedium = (): boolean => !isSmall() && window.innerWidth <= VIEWPORT.MEDIUM;

export const isLarge = (): boolean => !isMedium() && window.innerWidth > VIEWPORT.MEDIUM;
