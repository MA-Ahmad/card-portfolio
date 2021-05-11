import * as React from "react";
import { SimpleGrid, SlideFade } from "@chakra-ui/react";
import SkillCard from "./skill-card";
import { skills } from 'data/skills';
import { motion } from "framer-motion";
import {container} from './animation-variants';

const Skills = () => {
  return (
    <SlideFade in>
      <motion.div variants={container} initial="hidden" animate="visible">
        <SimpleGrid columns={3} spacing={3}>
          {skills.map((tool, index) => (
            <SkillCard
              key={index}
              name={tool.name}
              image={tool.image}
              platform={"web"}
              link={tool.link}
            />
          ))}
        </SimpleGrid>
      </motion.div>
    </SlideFade>
  );
};

export default Skills;
