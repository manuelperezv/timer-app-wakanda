import './App.css'
import Dashboard from './Pages/Dashboard'
import WeatherProvider from './store'

function App() {
  return (
    <WeatherProvider>
      <Dashboard />
    </WeatherProvider>
  )
}

export default App
