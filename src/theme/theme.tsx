import { extendTheme, HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import { breakpoints } from './foundations/breakpoints';
import { buttonStyles } from './components/button';
import { inputStyles } from './components/input';
import { components, globalStyles } from './styles';

export default extendTheme(
	{ breakpoints, components }, // Breakpoints
	buttonStyles, // button styles
	inputStyles, // input styles
	globalStyles
);

export interface CustomCardProps extends HTMLChakraProps<'div'>, ThemingProps {}