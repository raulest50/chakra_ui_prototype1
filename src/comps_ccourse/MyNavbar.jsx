
import {Flex, Box, Heading, Button, Text, Spacer, HStack} from '@chakra-ui/react'

import { defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react'

//const outline = defineStyle({
//    border: '2px dashed',
//    borderRadius: 0,
//    fontWeight: 'semibold',
//})
//
//const mi_estilo = defineStyleConfig({
//    variants:{outline}
//})
//
//const boton_tema = extendTheme({
//    components: {Button: mi_estilo},
//})

const theme = extendTheme({
    colors: {
        purple: {
            50: '#ede7f6',   // very light purple
            100: '#d1c4e9',
            200: '#b39ddb',
            300: '#9575cd',
            400: '#7e57c2',
            500: '#673ab7',   // base purple you might want to use for the button
            600: '#5e35b1',
            700: '#512da8',
            800: '#4527a0',
            900: '#311b92'
        }
    },
    components: {
        Button: {
            variants: {
                solid: (props) => ({
                    bg: props.colorMode === 'dark' ? 'purple.400' : 'purple.500',
                    color: 'white',
                    _hover: {
                        bg: 'purple.600'
                    },
                    _active: {
                        bg: 'purple.700'
                    }
                })
            }
        }
    }
});

export default function MyNavbar(){
    return(
            <Flex as={'nav'} p={"10px"} alignItems={'center'}>
                <Heading as={'h1'}> Dojo Task </Heading>
                <Spacer/>
                <HStack spacing={"20px"}>
                    <Box bg={'gray.200'} p={"10px"}>M</Box>
                    <Text> Lorep Ipsum</Text>
                    <Button colorScheme='purple' variant='solid' p={5}>Logout</Button>
                </HStack>
            </Flex>
            
            
//            {/*<Flex bg={"gray.200"} justify={"space-around"} wrap={"wrap"} gap={"5"}>*/}
//            {/*    <Box w={"150px"} h={"50px"} bg={'tomato'}></Box>*/}
//            {/*    <Box w={"150px"} h={"50px"} bg={'blue.800'}></Box>*/}
//            {/*    <Box w={"150px"} h={"50px"} bg={'green'} flexGrow={'1'}></Box>*/}
//            {/*    <Box w={"150px"} h={"50px"} bg={'yellow.500'} flexGrow={'2'} ></Box>*/}
//            {/*</Flex>*/}

    )
}