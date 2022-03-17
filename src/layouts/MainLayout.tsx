import { Box, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <Flex flexDirection="column" height="100%" minHeight="100%">
      <Box w="100%" bg="pink.100" h="50px">
        This is the header
      </Box>

      <Flex height="100%" flexDirection="row" bg="yellow.100">
        <Box minWidth="350px" width="350px" bg="green.100">
          Sidebar
        </Box>
        <Box flexGrow="1" bg="green.500" height="100%" overflow="auto">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  )
}

export default MainLayout
