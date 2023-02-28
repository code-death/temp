import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
return (
  <VStack display='flex' alignItems='start'>
    <Image borderTopRadius='10px' src={imageSrc} alt={title} />
    <Heading float='left' px='10px' size='sm'>{title}</Heading>
    <Text px='10px'>{description}</Text>
    <HStack>
      <Text paddingLeft='10px'  >Show more</Text>
      <FontAwesomeIcon icon={faArrowRight} />
    </HStack>
    </VStack>
)
};

export default Card;
