import About from "./components/About"
import About2 from "./components/About2"
import Faq from "./components/Faq"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Token from "./components/Token"
import Cta from './components/Cta'


function App() {


  return (
    <>
     <Navbar/>
     <main className=" flex-auto">
      <Hero/>
<About/>
<About2/>
<Token/>
<Faq/>
<Cta/>
<Footer/>

     </main>
    </>
  )
}

export default App
