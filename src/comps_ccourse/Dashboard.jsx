
import {Container, Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

function Dashboard(){
    
    const boxStyle={
        m:1,
        bg: ['gray.200', 'blue.300', 'tomato', 'yellow.300', 'purple.200'], // base, sm, md, lg, xl
        h: 120,
        borderRadius: 4,
        ':hover':{
            bg: 'gray.400',
        },
        ':active':{
            bg:'gray.600'
        }
    }
    
    return(
        <SimpleGrid columns={3}>

            <Box sx={boxStyle}></Box>
            <Box sx={boxStyle}></Box>
            <Box sx={boxStyle}></Box>

            <Box sx={boxStyle}></Box>
            <Box sx={boxStyle}></Box>
            <Box sx={boxStyle}></Box>

            <Box sx={boxStyle}></Box>
            <Box sx={boxStyle}></Box>
            <Box sx={boxStyle}></Box>

        </SimpleGrid>


    );
}

export default Dashboard;



//            <Container as={"section"} maxWidth={"4xl"} py={'20px'}>
//                <Heading as={'h1'} my={10} p={4}> The Header </Heading>
//                <Text ml ={10}>
//                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                    incididunt ut labore et dolore magna aliqua."
//                </Text>
//                <Text ml={10} color={"blue.300"} fontWeight={"bold"}>
//                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
//                    incididunt ut labore et dolore magna aliqua."
//                </Text>
//                <Box my={5} p={8} bg={'orange.300'} >
//                    <Text color={'white'} fontWeight="bold" fontSize={'xl'}>
//                        This is a Box
//                    </Text>
//                </Box>
//                <Box sx={boxStyles}>
//                    Second Box
//                </Box>
//            </Container>


//    const boxStyles = {
//        p: "10px",
//        bg: "purple.100",
//        color: "white",
//        m: "10px",
//        textAlign: "center",
//        filter: 'blur(2px)',
//        ':hover':{
//            color: 'black',
//            bg: 'blue.200',
//
//        }
//    }