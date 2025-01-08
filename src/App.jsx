import CardGroup from './components/CardGroup'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'

const App = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <CardGroup/>
    </div>
  )
}

export default App