import CardGroup from './components/CardGroup'
import Cta from './components/Cta'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
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
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App