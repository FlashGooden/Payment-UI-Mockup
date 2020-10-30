import { React, useState } from "react";
import {
   Box,
   Text,
   Icon,
   Flex,
   Slider,
   SliderTrack,
   SliderThumb,
   SliderFilledTrack,
   PseudoBox,
} from "@chakra-ui/core";
import { GiAlarmClock } from "react-icons/gi";
import { BsNewspaper } from "react-icons/bs";

export default function Pricing() {
   const [rate, setRate] = useState("Hourly");
   const [price, setPrice] = useState(180);

   const changeRate = (rate) => {
      setRate(rate);
   };

   const sliderHandler = (e) => {
      setPrice(parseInt(20) + e);
   };

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
         boxShadow="0px 21px 6px -16px #C0C0C0"
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
            <PseudoBox
               border={
                  rate === "Hourly" ? "1px solid blue" : "1px solid #80808029"
               }
               backgroundColor={rate === "Hourly" ? "rgb(239,242,254)" : null}
               borderRadius="7px"
               flexBasis="45%"
               display="flex"
               justifyContent="center"
               alignItems="center"
               className="hourly-price"
               py={3}
               onClick={() => changeRate("Hourly")}
               _hover={{ cursor: "pointer" }}
               position="relative"
               //  m={3}
            >
               <Box
                  mr={5}
                  as={GiAlarmClock}
                  size="25px"
                  color="messenger.500"
               />
               <Text fontWeight="bold" fontSize="xs">
                  Hourly
               </Text>
            </PseudoBox>
            <PseudoBox
               border={
                  rate === "Fixed" ? "1px solid blue" : "1px solid #80808029"
               }
               backgroundColor={rate === "Fixed" ? "rgb(239,242,254)" : null}
               alignItems="center"
               borderRadius="7px"
               flexBasis="45%"
               display="flex"
               justifyContent="center"
               className="fixed-price"
               py={3}
               onClick={() => changeRate("Fixed")}
               _hover={{ cursor: "pointer" }}
               //  m={3}
            >
               <Box
                  mr={5}
                  as={BsNewspaper}
                  size="25px"
                  color="messenger.500"
               />
               <Text fontWeight='bold' fontSize='xs'>Fixed</Text>
            </PseudoBox>
         </Flex>
         <Box className="rate" display="flex" mt={5}>
            <Text as="sup" mr={1} pt={5} color="gray.400" fontWeight="bold">
               ${" "}
            </Text>
            <Text fontSize="1.5rem"> {price} </Text>
            <Text as="sub" ml={1} pt={5} color="gray.400" fontWeight="bold">
               / {rate === "Hourly" ? "hour" : "fixed"}
            </Text>
         </Box>
         <Box className="pricing-slider">
            <Slider
               color="blue"
               min={0}
               max={280}
               defaultValue={180}
               onChange={(e) => sliderHandler(e)}
            >
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
            <Flex justifyContent="space-between" mt={-3}>
               <Text fontSize="xs" color="gray.400" fontWeight="bold">
                  $20
               </Text>
               <Text fontSize="xs" color="gray.400" fontWeight="bold">
                  $300
               </Text>
            </Flex>
         </Box>
      </Box>
   );
}
