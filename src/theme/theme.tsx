import { extendTheme, HTMLChakraProps, ThemingProps } from '@chakra-ui/react';
import { breakpoints } from './foundations/breakpoints';
import { components, globalStyles } from './styles';

export default extendTheme(
	{ breakpoints, components }, // Breakpoints
	globalStyles
);

export interface CustomCardProps extends HTMLChakraProps<'div'>, ThemingProps {}