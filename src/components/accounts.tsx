import * as React from "react";
import { Stack, IconButton, Link, Box, Flex } from "@chakra-ui/react";
import siteConfig from "../configs/site-config";

const iconProps = {
  variant: "ghost",
  size: "lg",
  isRound: true
};

const Accounts = () => {
  return (
    <Stack
      as="footer"
      isInline
      spacing={[1, 2]}
      justifyContent="space-between"
      alignItems="center"
      w={["100%", "85%", "80%"]}
      maxW={800}
      mx="auto"
    >
      <Flex
        flexDirection={["column", "column", "row"]}
        flexFlow={["column-reverse", "column-reverse"]}
        justifyContent={["center", "space-between"]}
        alignItems="center"
        w="100%"
      >
        <Box textAlign="center">
          {siteConfig.author.accounts.map((sc, index) => (
            <IconButton
              key={index}
              as={Link}
              isExternal
              href={sc.url}
              aria-label={sc.label}
              size="lg"
              colorScheme={sc.type}
              icon={sc.icon}
              {...iconProps}
            />
          ))}
        </Box>
      </Flex>
    </Stack>
  );
};

export default Accounts;
