import { useRoutes } from 'react-router-dom'
import routes from './router'
import Practice from './Practice'
function App() {
  const outlet = useRoutes(routes)
  return outlet
  return <Practice/>
}

export default App
