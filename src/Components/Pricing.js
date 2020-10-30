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
         width="85%"
         borderRadius="10px"
         backgroundColor="whiteAlpha.900"
         className="pricing-container"
         p={3}
         pl={8}
         pr={8}
         boxShadow='0px 21px 6px -16px #C0C0C0'
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
            justifyContent="space-between"
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
               backgroundColor="rgb(239,242,254)"
               flexBasis="45%"
               display="flex"
               justifyContent="center"
               className="hourly-price"
               py={3}
               //  m={3}
            >
               <Icon name="copy" />
               <Text fontWeight="bold" fontSize="sm">
                  Hourly
               </Text>
            </Box>
            <Box
               alignItems="stretch"
               border="1px solid blue"
               borderRadius="7px"
               backgroundColor="rgb(239,242,254)"
               flexBasis="45%"
               display="flex"
               justifyContent="center"
               className="hourly-price"
               py={3}
               //  m={3}
            >
               <Icon name="copy" />
               <Text>Fixed</Text>
            </Box>
         </Flex>
         <Box className="rate" display="flex" mt={5}>
            <Text as="sup" mr={1} pt={5} color="gray.400" fontWeight="bold">
               ${" "}
            </Text>
            <Text fontSize="1.5rem"> 180 </Text>
            <Text as="sub" ml={1} pt={5} color="gray.400" fontWeight="bold">
               / hour
            </Text>
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
              <Flex justifyContent='space-between' mt={-3}>
               <Text fontSize='xs' color='gray.400' fontWeight='bold' >$20</Text>
               <Text fontSize='xs' color='gray.400' fontWeight='bold' >$300</Text>
            </Flex>
         </Box>
      </Box>
   );
}
