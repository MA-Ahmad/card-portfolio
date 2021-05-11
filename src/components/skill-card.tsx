import React from "react";
import {
  VStack,
  Text,
  useColorModeValue,
  Box,
  Link,
  Image,
  Skeleton
} from "@chakra-ui/react";
import { usePalette } from "react-palette";
import { motion } from "framer-motion";
import { item } from "./animation-variants";

export interface SkillCardProps {
  name: string;
  image: string;
  link: string;
}

const SkillCard: React.SFC<SkillCardProps> = ({ name, image, link }) => {
  const { data, loading, error } = usePalette(image);

  return (
    <motion.div variants={item}>
      <motion.div whileHover={{ y: -5 }}>
        <Link href={link} isExternal _hover={{ textDecoration: "none" }}>
          <VStack
            p={2}
            bg={useColorModeValue("white", "gray.800")}
            rounded="xl"
            borderWidth="1px"
            borderColor={useColorModeValue("gray.100", "gray.700")}
            w="100%"
            textAlign="left"
            align="center"
            spacing={2}
            _hover={{ shadow: "md" }}
          >
            <Box
              rounded="lg"
              p={2}
              position="relative"
              overflow="hidden"
              lineHeight={0}
              rounded="lg"
              boxShadow="inset 0 0 1px 1px rgba(0, 0, 0, 0.015)"
            >
              <Box
                bg={data.lightVibrant}
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
                opacity={0.25}
              ></Box>
              {loading ? (
                <Skeleton height={26} width={26} rounded="md" />
              ) : (
                <Image
                  src={image}
                  height={26}
                  width={26}
                  layout="fixed"
                  rounded="md"
                />
              )}
            </Box>
            <VStack
              align="start"
              justify="flex-start"
              spacing={1}
              maxW="lg"
              h="100%"
            >
              <VStack spacing={0} align="center" flexGrow="1">
                <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                  {name}
                </Text>
              </VStack>
            </VStack>
          </VStack>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;
