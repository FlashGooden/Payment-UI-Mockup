import React from "react";
import Upgrade from "./Components/Upgrade";
import Profile from './Components/Profile'
import Pricing from './Components/Pricing'
import { Box, Text, Image } from "@chakra-ui/core";

export default function AppWrapper() {
   return (

         <Box
            width="992px"
            display="flex"
            justifyContent="space-between"
            p={2}
            backgroundColor="rgba(226,231,242)"
            pr={4}
            className="ui-container"
            m='auto'
         >
          
            <Upgrade />
            <Box
        width="md"
        mt={5}
        mb={5}
        p={0}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-end"
        className='right-container'
      >
            <Profile />
            <Pricing />
      </Box>
            
         </Box>
        

   );
}
