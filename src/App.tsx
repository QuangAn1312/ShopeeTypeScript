import useRouteElement from './pages/useRouteElement'

function App() {
  const routeElements = useRouteElement()

  return <div>{routeElements}</div>
}

export default App