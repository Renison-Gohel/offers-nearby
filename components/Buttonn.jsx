'use client'
import { Button } from "@radix-ui/themes";
import React from 'react'

const Buttonn = () => {
    const buttonClick = () => {
        console.log("click in comp")
    }

    return (
        <Button onClick={buttonClick}>
            Bookmark Comp
        </Button>
    )
}

export default Buttonn