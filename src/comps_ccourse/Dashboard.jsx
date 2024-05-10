
import {Container, Box, Heading, Text } from "@chakra-ui/react";

function Dashboard(){
    
    const boxStyles = {
        p: "10px",
        bg: "purple.100",
        color: "white",
        m: "10px",
        textAlign: "center",
        filter: 'blur(2px)',
        ':hover':{
            color: 'black',
            bg: 'blue.200',
            
        }
    }
    
    return(
        <>
            <Container as={"section"} maxWidth={"4xl"} py={'20px'}>
                <Heading as={'h1'} my={10} p={4}> The Header </Heading>
                <Text ml ={10}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua."
                </Text>
                <Text ml={10} color={"blue.300"} fontWeight={"bold"}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua."
                </Text>
                <Box my={5} p={8} bg={'orange.300'} >
                    <Text color={'white'} fontWeight="bold" fontSize={'xl'}>
                        This is a Box
                    </Text>
                </Box>
                <Box sx={boxStyles}>
                    Second Box
                </Box>
            </Container>
        </>
    );
}

export default Dashboard;