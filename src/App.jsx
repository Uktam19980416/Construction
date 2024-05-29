import { DreamHome } from "./components/DreamHome"
import { Main } from "./components/Main"
import { Navbar } from "./components/Navbar"
import { News } from "./components/News"
import { OurCompany } from "./components/OurCompany"
import { Projects } from "./components/Projects"
import { Services } from "./components/Services"
import { Exchange } from "./components/Exchange"
import { Info } from "./components/Info"
import { Contacts } from "./components/Contacts"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Main />
      <Services />
      <OurCompany />
      <DreamHome />
      <Projects />
      <News />
      <Exchange />
      <Info />
      <Contacts />
      <Footer />
    </>
  )
}

export default App
