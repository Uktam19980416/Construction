import { DreamHome } from "./components/DreamHome"
import { Main } from "./components/Main"
import { Navbar } from "./components/Navbar"
import { OurCompany } from "./components/OurCompany"
import { Projects } from "./components/Projects"
import { Services } from "./components/Services"

function App() {

  return (
    <>
      <Navbar />
      <Main />
      <Services />
      <OurCompany />
      <DreamHome />
      <Projects />
    </>
  )
}

export default App
