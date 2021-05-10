import * as React from "react";
import { ChakraProvider, Box, Text, Code, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box p={3}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Box
        fontSize="xl"
        position="fixed"
        left={0}
        right={0}
        bottom={0}
        top={0}
        textAlign="center"
        height="max-content"
        width="max-content"
        margin="auto"
      >
        <Text>
          Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
        </Text>
      </Box>
    </Box>
  </ChakraProvider>
);
