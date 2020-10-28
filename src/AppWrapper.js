import React from "react";
import Upgrade from "./Components/Upgrade";
import { Box } from "@chakra-ui/core";

export default function AppWrapper() {
   return (
      <div>
         <Box
            width="45%"
            m="auto"
            display="flex"
            justifyContent="center"
            p={2}
            backgroundColor="whiteAlpha.900"
         >
            <Upgrade />
         </Box>
      </div>
   );
}
