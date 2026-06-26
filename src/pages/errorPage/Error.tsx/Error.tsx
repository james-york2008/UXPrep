import { Link } from "react-router-dom"
import styles from '../../../css/errorPage/ErrorPage.module.css'
import type { ReactNode } from "react"

type ErrorProps = {
  children: ReactNode
}

export default function Error({ children }: ErrorProps) {
  return(
    <div className={styles.error}>
      <h1 role="alert" className={styles.errorText}>{children}</h1>
      <Link to={'/UXPrep'} className="button" >Return to home page</Link>
    </div>
  )
}