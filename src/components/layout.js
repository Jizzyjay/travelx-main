import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { GlobalStyle } from "./Styles/GlobalStyles"

const Layout = ({ children }) => {
  
  return (
    <>
      <GlobalStyle />
      <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout
