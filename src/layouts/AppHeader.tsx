import {
  Burger,
  Header,
  MediaQuery,
  useMantineTheme,
  Text,
} from '@mantine/core'

interface Props {
  opened: boolean
  setOpened: (o: boolean) => void
}

function AppHeader({ opened, setOpened }: Props) {
  const mantineTheme = useMantineTheme()

  return (
    <Header
      height={70}
      p="md"
      sx={(theme) => ({
        backgroundColor: theme.colors.orange[4],
        color: 'white',
      })}
    >
      {/* Handle other responsive styles with MediaQuery component or createStyles function */}
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="sm"
            color={mantineTheme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Text>Vite React Todo App</Text>
      </div>
    </Header>
  )
}

export default AppHeader
