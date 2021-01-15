
import React from "react"
import {Container, Box} from "@chakra-ui/react"


export default function Hero({children}){
    return(
        <div className="w-full mx-auto pt-16 h-auto bg-black-03 pb-10">
            
        <h2 className="flex justify-center">
            <p className="lg:text-8xl text-5xl bg-accent-3 text-white font-medium mr-4">On</p>
            <p className="lg:text-7xl text-5xl text-white font-mono mt-3">boarding</p>
        </h2>

        <h2  className="flex justify-center py-7 mb-11">
            
            <p className="lg:text-7xl text-4xl text-white font-mono mt-3">Marketing</p>
            <p className="lg:text-8xl text-4xl bg-accent-3 text-white font-medium mr-4">Digital</p>
        </h2>
        <Container maxW="xl" centerContent>
        <Box padding="4" bg="gray.100" maxW="5xl" className="lg:text-5xl text-2xl text-center font-thin">
        A tecnologia aplicada nos negócios.<br></br>
        
        </Box>
        </Container>
        </div>
        
    )
}