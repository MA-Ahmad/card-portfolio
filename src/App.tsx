import * as React from "react";
import { ChakraProvider, Box, extendTheme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { mode } from "@chakra-ui/theme-tools"
import Card from "components/card";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        color: mode("gray.700", "whiteAlpha.900")(props),
        bg: mode("#f5f0ea", "gray.900")(props),
      }
    })
  }
});

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Card />
      </Box>
    </ChakraProvider>
  );
};
