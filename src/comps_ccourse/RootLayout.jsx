
import {Outlet} from 'react-router-dom'
import MyNavbar from "./MyNavbar.jsx";
function RootLayout(){
    return(
        <>
            <MyNavbar/>
            <Outlet/>
        </>
    );
}

export default RootLayout;