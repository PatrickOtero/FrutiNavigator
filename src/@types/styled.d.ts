import 'styled-components/native';
import dark from '../theme/dark';
import light from '../theme/light';

type Theme = typeof light | typeof dark;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}