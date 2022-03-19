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
    <Header height={70} p="md" className="bg-primary text-primary-content">
      {/* Handle other responsive styles with MediaQuery component or createStyles function */}
      <div className="flex items-center h-full">
        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            size="sm"
            mr="xl"
            color={mantineTheme.colors['primary-content'][0]}
          />
        </MediaQuery>

        <Text>Vite React Todo App</Text>
      </div>
    </Header>
  )
}

export default AppHeader
