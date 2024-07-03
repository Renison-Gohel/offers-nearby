'use client'

import React, { useState, useEffect } from 'react'
import { Avatar, Button, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import { FaHome, FaInbox, FaCompass, FaBell, FaBars } from 'react-icons/fa';
import Image from "next/image";

const NavBar = () => {
    // const [header,setHeader] = useState(false);

    // const scrollHeader = () => {
    //     if(window.scrollY >= 20){
    //         setHeader(true)
    //         console.log("true");
    //     }else{
    //         console.log("false");
    //         setHeader(false)
    //     }
    // }

    // useEffect(() => {
    //  window.addEventListener('scroll', scrollHeader) 
    //     return () => {
    //         window.addEventListener('scroll', scrollHeader)
    //     }
    // }, [])
    
    return (
        // <div className={header ? "sticky top-0 w-[100%] blur z-10" : ""}>
        <header className="flex justify-between items-center p-4" >
            <Flex direction={"column"} gap='1' align={"start"} className="text-slate-400 font-medium">
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <Button variant="ghost" size="3" >
                            <strong>Rajkot</strong>
                            <DropdownMenu.TriggerIcon />
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content size="2">
                        <DropdownMenu.Item>Ahmedabad</DropdownMenu.Item>
                        <DropdownMenu.Item>Gandhinagar</DropdownMenu.Item>
                        <DropdownMenu.Item>Surat</DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
                {/* <span className="text-s">within 20 miles</span> */}
                <Text as="span" size={"1"}>within 20 miles</Text>
            </Flex>

            {/* Logo goes here */}
            <Avatar
                src="https://avatars.githubusercontent.com/u/44880024?v=4"
                fallback="R"
                size="4"
                radius="full"
            />
        </header>
        // </div>
    )
}

export default NavBar