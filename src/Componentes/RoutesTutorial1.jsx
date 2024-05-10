
import {VStack, Heading, Box, Container, Flex} from '@chakra-ui/react';
import  {Route, Routes} from "react-router-dom";

import {NavBar} from './Navbar.jsx';
import {Home} from './Home.jsx'
import {About} from './About.jsx'
import {Contact} from './Contact.jsx'
import {NotFound} from './NotFound.jsx'

function RoutesTutorial1(){
    return (
        <>
            <Flex direction={'column'}>
                <Flex justifyContent={'space-between' }>
                    <NavBar/>
                </Flex>
                <Container>
                    <Routes>
                        <Route exact path={"/"} element={<Home/>}/>
                        <Route exact path={"/about"} element={<About/>}/>
                        <Route exact path={"/contact"} element={<Contact/>}/>
                        <Route exact path={"*"} element={<NotFound/>}/>
                    </Routes>
                </Container>
            </Flex>
        </>
    );
}

export default RoutesTutorial1;