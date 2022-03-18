import {
  CSSObject,
  MantineTheme,
  Navbar,
  Text,
  useMantineTheme,
} from '@mantine/core'
import {
  Link,
  LinkProps,
  useMatch,
  useResolvedPath,
  PathMatch,
} from 'react-router-dom'

interface Props {
  opened: boolean
}

const navItemStyle = (theme: MantineTheme): CSSObject => ({
  padding: '5px 10px',
  margin: '1px 10px',
  borderRadius: '5px',

  '&:hover': {
    backgroundColor: theme.colors.gray[4],
  },
})

const activeNavItemStyle = (
  match: PathMatch<string> | null,
  theme: MantineTheme
) => ({
  backgroundColor: match ? theme.colors.gray[4] : 'transparent',
})

function CustomNavLink({ children, to, ...props }: LinkProps) {
  const mantineTheme = useMantineTheme()
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Text
      sx={navItemStyle}
      component={Link}
      style={activeNavItemStyle(match, mantineTheme)}
      to={to}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </Text>
  )
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
      width={{ sm: 250, lg: 300 }}
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
      })}
    >
      <CustomNavLink to="/">Home</CustomNavLink>
      <CustomNavLink to="/about">About</CustomNavLink>
    </Navbar>
  )
}

export default AppSidebar
