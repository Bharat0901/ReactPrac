import { BrowserRouter, Routes,Route } from "react-router-dom"
import { Billing, Clients, Footer, Navbar } from "./components"
import Helo from "./Helo"
// import Hero from "./Hero"
const App = () => {
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Helo/>}/>
            {/* <Route path="/#home" element={<Stats />}/>
            <Route path="/#features" element={<Business />}/>
            <Route path="/#product" element={<Billing />}/> */}
            {/* <Route path="/hero" element={<Hero />}/> */}
        </Routes>
        <Footer/>
        
        </BrowserRouter>
    )
}
export default App