import React from "react";
import { Box, Text, Flex, Icon, Input, Button } from "@chakra-ui/core";

export default function Upgrade() {
   return (
      <Box
         width="lg"
         className="upgrade-container"
         borderRadius="10px"
         p={3}
         backgroundColor="whiteAlpha.900"
         mt={5}
        mb={5}

      >
         <Box className="upgrade-wrapper" p={1}>
            <Text fontWeight="bold" mb={2} mt={3} fontSize={"lg"}>
               Upgrade your plan
            </Text>
            <Text textAlign="left" fontSize="xs" pr={20}>
               Please make the payment to start enjoying all the features of our
               premium plan as soon as possible.
            </Text>
            <Box
               mt={5}
               className="plan-description"
               borderRadius="3px"
               mb={5}
               p={0}
            >
               <Flex
                  border="1px solid blue"
                  borderRadius="3px"
                  justifyContent="flex-start"
                  p={5}
                  backgroundColor="messenger.50"
               >
                  <Box p={3} flexBasis="20%" mr={2} borderRadius="3px">
                     <Icon name="copy" />
                  </Box>
                  <Box flexBasis="30%" mr={8} p={0}>
                     <Text fontSize="md" fontWeight="bold">
                        Small Business
                     </Text>
                     <Text fontSize="xs">CHANGE PLAN</Text>
                  </Box>
                  <Box
                     flexBasis="40%"
                     p={0}
                     display="flex"
                     justifyContent="flex-end"
                     alignItems="center"
                  >
                     <Text as="sup" mr={1}>
                        ${" "}
                     </Text>
                     <Text fontSize="2.0rem"> 8,350 </Text>
                     <Text as="sub" ml={1} pt={2}>
                        / year
                     </Text>
                  </Box>
               </Flex>
            </Box>
            <Box className="payment-details" mb={5} p={0}>
               <Text mb={3} fontWeight="bold" fontSize="md">
                  Payment details
               </Text>
               <Box className="card-container" p={0}>
                  <Flex
                     mb={3}
                     justifyContent="space-between"
                     p={1}
                     className="card-info"
                  >
                     <Flex p={1} width="50%">
                        <Box
                           flexBasis="30%"
                           display="block"
                           mr={5}
                           p={1}
                           className="card-image"
                           borderRadius="3px"
                        >
                           <Icon name="copy" />
                        </Box>
                        <Box flexBasis="80%" className="card-number" p={0}>
                           <Text fontWeight="bold" fontSize="sm">
                              Credit card
                           </Text>
                           <Text fontSize="xs" color='gray.400' fontWeight='bold'>2344 xxxx xxxx 8880</Text>
                        </Box>
                     </Flex>
                     <Flex p={1} justifyContent="flex-end">
                        <Input
                           size="xl"
                           width="35%"
                           placeholder="CVC"
                           className="card-id"
                           pl={1}
                           borderRadius="3px"
                           fontWeight="bold"
                        />
                     </Flex>
                  </Flex>
                  <Flex
                     mb={3}
                     justifyContent="space-between"
                     p={1}
                     className="card-info"
                  >
                     <Flex p={1} width="50%">
                        <Box
                           flexBasis="30%"
                           display="block"
                           mr={5}
                           p={1}
                           className="card-image"
                           borderRadius="3px"
                        >
                           <Icon name="copy" />
                        </Box>
                        <Box flexBasis="80%" className="card-number" p={0}>
                           <Text fontWeight="bold" fontSize="sm" >
                              Credit card
                           </Text>
                           <Text fontSize="xs" color='gray.400' fontWeight='bold'>8890 xxxx xxxx 1234</Text>
                        </Box>
                     </Flex>
                     <Flex p={1} justifyContent="flex-end">
                        <Input
                           size="xl"
                           width="35%"
                           placeholder="CVC"
                           className="card-id"
                           pl={1}
                           borderRadius="3px"
                           fontWeight="bold"
                        />
                     </Flex>
                  </Flex>
                  <Text
                     fontSize="xs"
                     mb={10}
                     color="messenger.500"
                     fontWeight="bold"
                     letterSpacing={2}
                  >
                     ADD PAYMENT METHOD
                  </Text>
               </Box>
            </Box>
            <Box className="email-form" mb={5} p={1}>
               <Input placeholder="Email address" />
            </Box>
            <Button
               width="full"
               color="whiteAlpha.900"
               backgroundColor="messenger.500"
               size="lg"
               variant="outline"
               p={8}
            >
               Proceed to payment
            </Button>
         </Box>
      </Box>
   );
}
