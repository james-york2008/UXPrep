import Navbar from "../../components/navbar/Navbar"
import Hero from "./hero/Hero"
import Tests from "./tests/Tests"
import Legal from "../../components/legal/Legal"

export default function LandingPage () {
  return(
    <>
      <Navbar />
      <Hero />
      <Tests />
      <Legal />
    </>
  )
}