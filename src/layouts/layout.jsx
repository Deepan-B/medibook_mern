
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Routers from "../Routes/routes.jsx"

const Layout = () => {
  return (
    <>
      <Header></Header>
      <main>
        <Routers></Routers>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Layout
