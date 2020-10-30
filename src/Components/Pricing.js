import React from "react";
import {
   Box,
   Text,
   Icon,
   Flex,
   Slider,
   SliderTrack,
   SliderThumb,
   SliderFilledTrack,
} from "@chakra-ui/core";

export default function Pricing() {
   return (
      <Box
         height="45%"
         width="90%"
         borderRadius="10px"
         backgroundColor="whiteAlpha.900"
         className="pricing-container"
         p={3}
         pl={8}
      >
         <Text
            fontWeight="bold"
            fontSize="md"
            mt={3}
            mb={2}
            className="price-heading"
         >
            Set up your pricing
         </Text>
         <Text
            fontSize="xs"
            className="price-description"
            color="gray.400"
            fontWeight="bold"
            pr={16}
         >
            Please set up your hourly or fixed rate so that the client is aware
            of your pricing.
         </Text>
         <Flex
            justifyContent="center"
            alignItems="space-between"
            // p={1}
            className="price-rate-container"
            mt={5}
            // mx='auto'
            // px={3}
         >
            <Box
               border="1px solid blue"
               borderRadius="7px"
               backgroundColor="messenger.50"
               flexBasis="45%"
               display="flex"
               justifyContent="space-around"
               className="hourly-price"
               py={3}
               m={3}
            >
               <Icon name="copy" />
               <Text fontWeight='bold' fontSize='sm'>Hourly</Text>
            </Box>
            <Box
               alignItems="stretch"
               border="1px solid blue"
               borderRadius="7px"
               backgroundColor="messenger.50"
               flexBasis="45%"
               display="flex"
               justifyContent="space-around"
               className="hourly-price"
               py={3}
               m={3}
            >
               <Icon name="copy" />
               <Text>Fixed</Text>
            </Box>
         </Flex>
         <Box className="rate">
            <Text>$ 180 / hour</Text>
         </Box>
         <Box className="pricing-slider">
            <Slider color="blue" min="0" max="280" defaultValue={180}>
               <SliderTrack />
               <SliderFilledTrack />
               <SliderThumb
                  size={5}
                  backgroundColor="messenger.500"
                  _focus={{
                     boxShadow: "0 0 2pt 0pt blue",
                     border: "4px solid white",
                  }}
               />
            </Slider>
         </Box>
      </Box>
   );
}
