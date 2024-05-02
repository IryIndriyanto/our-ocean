import { extendTheme, HTMLChakraProps, ThemingProps } from "@chakra-ui/react";
import { breakpoints } from "./foundations/breakpoints";
import { buttonStyles } from "./components/button";
import { inputStyles } from "./components/input";
import { globalStyles } from "./styles";
import { components } from "./components/drawer";

export default extendTheme(
  { breakpoints, components },
  buttonStyles,
  inputStyles,
  globalStyles
);

export interface CustomCardProps extends HTMLChakraProps<"div">, ThemingProps {}
