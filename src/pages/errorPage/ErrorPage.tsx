import Navbar from "../../components/navbar/Navbar"
import Error from "./Error.tsx/Error"
import Legal from "../../components/legal/Legal"
import type { ReactNode } from "react"

type ErrorProps = {
  children: ReactNode
}

export default function ErrorPage({ children }: ErrorProps) {
  return(
    <>
      <Navbar />

      <main>
        <Error>{children}</Error>
      </main>
      
      <Legal />
    </>
  )
}