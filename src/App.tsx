import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Card from "components/card";

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
