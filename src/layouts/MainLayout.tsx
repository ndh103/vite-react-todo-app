import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

function MainLayout() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)

  return (
    <Flex flexDirection="column" height="100%" minHeight="100%">
      <Header onShowSidebar={toggleSidebar} />

      <Flex height="100%" flexDirection="row">
        <Sidebar onClose={toggleSidebar} isSideBarOpen={isSidebarOpen} />

        <Box flexGrow="1" height="100%" overflow="auto">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  )
}

export default MainLayout
