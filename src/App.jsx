import CardGroup from './components/CardGroup'
import Cta from './components/Cta'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Topbar from './components/Topbar'

const App = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <CardGroup/>
      <Cta/>
      <Pricing/>
    </div>
  )
}

export default App