import { Navbar, Text } from '@mantine/core'

interface Props {
  opened: boolean
}

function AppSidebar({ opened }: Props) {
  return (
    <Navbar
      p="md"
      // Breakpoint at which navbar will be hidden if hidden prop is true
      hiddenBreakpoint="md"
      // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
      hidden={!opened}
      // when viewport size is less than theme.breakpoints.sm navbar width is 100%
      // viewport size > theme.breakpoints.sm – width is 300px
      // viewport size > theme.breakpoints.lg – width is 400px
      width={{ sm: 300, lg: 400 }}
    >
      <Text>Application navbar</Text>
    </Navbar>
  )
}

export default AppSidebar
