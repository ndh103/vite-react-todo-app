import { Navbar, Text } from '@mantine/core'
import { Link, LinkProps, useMatch, useResolvedPath } from 'react-router-dom'

interface Props {
  opened: boolean
  setOpened: (opened: boolean) => void
}

function CustomNavLink({ children, to, onClick, ...props }: LinkProps) {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  const navItemStyle = `py-2 px-5 my-[1px] mx-1 rounded-lg hover:!bg-gray-500 ${
    match ? 'bg-gray-400' : 'bg-transparent'
  }`

  return (
    <Text
      className={navItemStyle}
      component={Link}
      to={to}
      onClick={onClick}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </Text>
  )
}

function AppSidebar({ opened, setOpened }: Props) {
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
      width={{ sm: 250, lg: 300 }}
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
      })}
    >
      <CustomNavLink to="/" onClick={() => setOpened(!opened)}>
        Home
      </CustomNavLink>
      <CustomNavLink to="/about" onClick={() => setOpened(!opened)}>
        About
      </CustomNavLink>
    </Navbar>
  )
}

export default AppSidebar
