
import {Flex, Box, Heading, Button, Text, Spacer, HStack} from '@chakra-ui/react'

import { defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react'

const outline = defineStyle({
    border: '2px dashed',
    borderRadius: 0,
    fontWeight: 'semibold',
})

const mi_estilo = defineStyleConfig({
    variants:{outline}
})

const boton_tema = extendTheme({
    components: {Button: mi_estilo},
})

export default function MyNavbar(){
    return(
        <>
            
            <Flex as={'nav'} p={"10px"} alignItems={'center'}>
                <Heading as={'h1'}> Dojo Task </Heading>
                <Spacer/>
                <HStack spacing={"20px"}>
                    <Box bg={'gray.200'} p={"10px"}>M</Box>
                    <Text> Lorep Ipsum</Text>
                    <Button colorScheme="purple" >Logout</Button>
                </HStack>
            </Flex>
            
            
            {/*<Flex bg={"gray.200"} justify={"space-around"} wrap={"wrap"} gap={"5"}>*/}
            {/*    <Box w={"150px"} h={"50px"} bg={'tomato'}></Box>*/}
            {/*    <Box w={"150px"} h={"50px"} bg={'blue.800'}></Box>*/}
            {/*    <Box w={"150px"} h={"50px"} bg={'green'} flexGrow={'1'}></Box>*/}
            {/*    <Box w={"150px"} h={"50px"} bg={'yellow.500'} flexGrow={'2'} ></Box>*/}
            {/*</Flex>*/}
        </>
    )
}