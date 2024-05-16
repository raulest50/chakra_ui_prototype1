
import {Outlet} from 'react-router-dom'
import MyNavbar from "./MyNavbar.jsx";

import {Grid, GridItem} from '@chakra-ui/react'

import MySidebar from "./MySidebar.jsx";


function RootLayout(){
    return(
        <Grid templateColumns={'repeat(6,1fr)'} bg={'gray.50'}>
            <GridItem as={'aside'} colSpan={'1'} bg={'purple.400'} minHeight={'100hv'}>
                <MySidebar/>
            </GridItem>
            <GridItem colSpan={'5'}>
                <MyNavbar/>
                <Outlet/>
            </GridItem>
        </Grid>
    );
}

export default RootLayout;