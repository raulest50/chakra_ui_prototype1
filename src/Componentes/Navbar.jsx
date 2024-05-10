
import React from "react";
import {Box, Link, Flex, Text, Button, Stack, Heading} from "@chakra-ui/react";

export default function NavBar() {
  return (
    <>
      <Stack direction={'row'} align={'center'} justify={'space-between'}>
        <Box fontSize={'2xl'}>
          <Heading as={'h2'} textColor={'tomato'}> LA Cosmetics</Heading>
          <Heading as={'h2'} textColor={'tomato'}> Manufacture</Heading>
        </Box>
        <Flex
          bg="tomato"
          p={4}
          color="white"
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex justify="space-between">
            <Box p={2}>
              <Link href="/">Home</Link>
            </Box>
            <Box p={2}>
              <Link href="/contact">Contact</Link>
            </Box>
            <Box p={2}>
              <Link href="/about">About</Link>
            </Box>
          </Flex>     
        </Flex>
      </Stack>
    </>
  );
}


export {NavBar};