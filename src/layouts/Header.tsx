import { Box, Center, Text, Flex } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

interface Props {
  onShowSidebar: () => void
}

function Header({ onShowSidebar }: Props) {
  return (
    <Flex bg="tomato" p={2} color="white">
      <Box>
        <HamburgerIcon
          onClick={onShowSidebar}
          w={6}
          h={6}
          display={{ base: 'block', lg: 'none' }}
          cursor="pointer"
          marginX={2}
          marginTop={1}
        />
      </Box>
      <Center>
        <Text fontSize="xl">Vite React Todo App</Text>
      </Center>
    </Flex>
  )
}

export default Header
