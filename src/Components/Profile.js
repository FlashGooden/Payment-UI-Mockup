import React from "react";
import { Box, Text, Image } from "@chakra-ui/core";

export default function Profile() {
   return (
      <Box
         height="55%"
         width="90%"
         borderRadius="10px"
         p={1}
         display="flex"
         flexDirection="column"
         justifyContent="space-between"
         pb={6}
         className="profile-card-container"
      >
         <Box height="25%" className="profile-background">
            <Image
               height="80px"
               width="80px"
               m="auto"
               borderRadius="50%"
               mt={3}
               className="profile-image"
            />
         </Box>
         <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            className="profile-info"
         >
            <Text mt={6} fontWeight="bold">
               Filip Martin Jose
            </Text>
            <Text fontSize="xs" color="gray.400" fontWeight="bold">
               Los Angeles
            </Text>
            <Text
               fontSize="xs"
               backgroundColor="messenger.600"
               borderRadius="30px"
               color="whiteAlpha.900"
               width="25%"
               textAlign="center"
               fontWeight="bold"
               mt={3}
               height="35%"
               pt={1}
               pb={1}
            >
               Pro Level
            </Text>
         </Box>
         <Box
            display="flex"
            justifyContent="space-around"
            alignItems="flex-start"
            p="auto"
            flexDirection="row"
            className="profile-stats"
         >
            <Box p={0} flexBasis="20%">
               <Text fontSize="xs" fontWeight="bold" color="gray.400">
                  Followers
               </Text>
               <Text fontSize="2xl">980</Text>
            </Box>
            <Box p={0} flexBasis="20%">
               <Text fontSize="xs" fontWeight="bold" color="gray.400">
                  Projects
               </Text>
               <Text fontSize="2xl">142</Text>
            </Box>
            <Box p={0} flexBasis="20%" display="block" flexDirection="column">
               <Text fontSize="xs" fontWeight="bold" color="gray.400">
                  Rank
               </Text>
               <Text fontSize="2xl">129</Text>
            </Box>
         </Box>
      </Box>
   );
}
