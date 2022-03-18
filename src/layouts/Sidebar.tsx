import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerContent,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react'

interface Props {
  onClose: () => void
  isSideBarOpen: boolean
}

function SidebarContent() {
  return (
    <VStack align="left">
      <Box layerStyle="box.sidebar-item">Home</Box>
      <Box layerStyle="box.sidebar-item"> About</Box>
    </VStack>
  )
}

function Sidebar({ isSideBarOpen, onClose }: Props) {
  const breakPoint = useBreakpointValue({ base: 'base', lg: 'lg' })

  return (
    <>
      <Box
        minWidth="300px"
        width="300px"
        p={5}
        top={0}
        h="100%"
        bg="gray.50"
        display={{ base: 'none', lg: 'block' }}
      >
        <SidebarContent />
      </Box>
      {breakPoint === 'base' && (
        <Drawer isOpen={isSideBarOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <SidebarContent />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )}
    </>
  )
}

export default Sidebar
