import { 
    Center, 
    Box, 
    Heading,
    Text,
    Button,


     
} from "@chakra-ui/react"

export default function Hero(){
    return(
        <div>
            <Center className="bg-accent-1 flex "  h="500px" w="100%"  color="white">
                <Heading className="mx-3" as="h2" size="3xl" isTruncated>
                Marketin
                </Heading>
                
                <Box className="ml-6 bg-accent-3" w="auto" p={1} color="white">
                           <h1 className="text-7xl font-medium ">On</h1>
                </Box>
                <Box className="mr-8"  w="auto" p={0} color="white">
                           <h1 className="text-7xl">boarding</h1>
                </Box>
                <Center>
                <Box maxW="32rem">
                <Heading mb={4}>A tecnologia aplicada nos negócios.</Heading>
                <Text fontSize="xl">
                    Faça parte do mercado que mais cresce no mundo.
                </Text>
                <Button size="lg" colorScheme="green" mt="24px">
                    Pedir um orçamento
                </Button>
                </Box>
                </Center>
                
            </Center>

        </div>
    )
}