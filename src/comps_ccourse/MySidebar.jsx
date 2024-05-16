
import {List, ListItem, ListIcon, VStack, Text} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";

// import all icons
import {GiArchiveRegister} from "react-icons/gi";
import {RiTimelineView} from "react-icons/ri";
import {BsDatabaseCheck} from "react-icons/bs";
import {AiOutlineAudit} from "react-icons/ai";
import {IoFileTrayFullOutline} from "react-icons/io5";
import {MdOutlineSdCardAlert, MdAssignmentAdd} from "react-icons/md";
import {PiDownloadDuotone} from "react-icons/pi";

const pad = '0.3em'

const my_li_style ={
    borderBottom:'0.1em solid',
}

export default function MySidebar(){
    return(
        <List color={'white'} fontSize={"1.2em"} spacing={'0.5em'} p={'1em'}>
            <ListItem p={pad} sx={my_li_style}>
                <NavLink to={"/"}>
                    <VStack>
                    <ListIcon as={MdOutlineSdCardAlert} />
                    <Text>Dashboard</Text>
                    </VStack>
                </NavLink>
            </ListItem>
            <ListItem p={pad} sx={my_li_style}>
                <NavLink to={"/profile"}>
                    <ListIcon as={GiArchiveRegister} />
                    <Text>Profile</Text>
                </NavLink>
            </ListItem>
            <ListItem p={pad} sx={my_li_style}>
                <NavLink to={"/create"}>
                    <ListIcon as={PiDownloadDuotone} />
                    <Text>Create</Text>
                </NavLink>
            </ListItem>
        </List>
    )
}