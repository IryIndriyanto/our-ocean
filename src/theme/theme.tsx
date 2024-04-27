import { extendTheme, HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import { breakpoints } from './foundations/breakpoints';
import { globalStyles } from './styles';

export default extendTheme(
	{ breakpoints }, // Breakpoints
	globalStyles
);

export interface CustomCardProps extends HTMLChakraProps<'div'>, ThemingProps {}