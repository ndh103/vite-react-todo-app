import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <div>This is main layout</div>

      <Outlet />
    </div>
  )
}

export default MainLayout
