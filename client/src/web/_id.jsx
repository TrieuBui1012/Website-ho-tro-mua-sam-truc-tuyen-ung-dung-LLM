
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Menu from "./menu/Menu"
import { Container } from "@mui/material"
import { Outlet } from "react-router-dom"


const Web = () => {
    return (
        <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
            <Header />
            <Menu />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Container>
    )
  }
  
export default Web