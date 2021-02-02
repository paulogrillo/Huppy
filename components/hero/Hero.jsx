
import React from "react"
import {Container, Box} from "@chakra-ui/react"


export default function Hero({children}){
    return(
        <div className="w-full mx-auto pt-16 h-auto bg-black-03 pb-10">
            
        <h2 className="flex justify-center border-red-600 border-r-4">
            <p className="lg:text-8xl text-5xl bg-accent-3 text-white font-medium pr-2 py-2 pb-4">E </p>
            <p className="lg:text-8xl text-5xl bg-green-600 text-white font-medium mr-4 py-2 pb-4 p-4 border-pink-500">commerce </p>
            
        </h2>

        <h2  className="flex justify-center py-7 mb-11 border-green-700 border-l-4">
            
            <p className="lg:text-6xl text-4xl text-white font-mono mt-3"> Marketing</p>
            <p className="lg:text-4xl pr-8 text-4xl text-white font-mono mt-3"> </p>
            <p className="lg:text-7xl text-4xl bg-accent-3 text-white font-medium mr-4"> Digital </p>
            
        </h2>
        <h2 className="flex justify-center">
        <p className="lg:text-8xl text-5xl bg-accent-3 text-white font-medium mr-4 py-2 pb-4 p-4 shadow-lg">P </p>
        <p className="lg:text-7xl text-4xl border-white text-white font-mono mt-3"> erformance</p>
        </h2>
        <Container maxW="xl" centerContent>
        <Box padding="4" bg="gray.100" maxW="3xl" className="border-red-600 border-l border-r border-b-4 border-t-4 mt-8 rounded-t-lg lg:text-4xl text-2xl text-center font-thin">
            Criação de sites estáticos, blogs e e-commerce. 
  
        
        </Box>

        </Container>
        </div>
        
    )
}