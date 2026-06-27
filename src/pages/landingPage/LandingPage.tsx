import Navbar from "../../components/navbar/Navbar"
import Hero from "./hero/Hero"
import Tests from "./tests/Tests"
import Legal from "../../components/legal/Legal"

export default function LandingPage () {
  return(
    <>
      <Navbar mainLink="tests" skipToMainLink="testsSection" />

      <main id="testsSection">
        <Hero />
        <Tests />
      </main>
      
      <Legal />
    </>
  )
}