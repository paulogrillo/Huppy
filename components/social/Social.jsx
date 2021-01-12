import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/react"

function Social() {
    const { isOpen, onToggle } = useDisclosure()
    const {
        isOpen: isModalOpen,
        open: openModal,
        close: closeModal
      } = useDisclosure();
      const { isOpen: isTooltipOpen, toggle: toggleTooltip } = useDiclosure(true);

    return (
      <>
        <Button onClick={onToggle}>Click Me</Button>
        <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
          <Box
            p="40px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
           <div>
               <ul>
                   <li>1</li>
                   <li>2</li>
                   <li>3</li>
                   <li>4</li>

               </ul>
           </div>
          </Box>
        </Slide>
      </>
    )
  }

export default Social;