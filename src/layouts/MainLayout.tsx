import { useState } from 'react'
import { AppShell } from '@mantine/core'
import { Outlet } from 'react-router-dom'
import AppHeader from './AppHeader'
import AppSidebar from './AppSidebar'

function MainLayout() {
  const [opened, setOpened] = useState(false)

  return (
    <AppShell
      // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
      navbarOffsetBreakpoint="md"
      // fixed prop on AppShell will be automatically added to Header and Navbar
      fixed
      navbar={<AppSidebar opened={opened} setOpened={setOpened} />}
      header={<AppHeader opened={opened} setOpened={setOpened} />}
    >
      <Outlet />
    </AppShell>
  )
}

export default MainLayout
