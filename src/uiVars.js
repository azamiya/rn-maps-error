import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const HEIGHT = height;
export const WIDTH = width;
export const FORM_WIDTH = (width * 72) / 100;

export const FLEX = {
  ONE: 1,
};

export const MARGIN = {
  LOW: 8,
  MEDIUM: 16,
  HIGH: 32,
  HIGHX: 64,
};

export const PADDING = {
  LOW: 8,
  MEDIUM: 16,
  HIGH: 32,
};

export const LOGO_SIZE = 156;

export const COLORS = {
  red: '#af2825',
  green: '#219e4a',
  blue: '#007aff',
  gray: '#9e9e9e',
};
