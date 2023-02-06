import { Route, Routes } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { Create } from "./pages/Create"
import { Home } from "./pages/Home"
import { Login } from "./pages/Login"
function App() {
  return (<>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  </>
  )
}

export default App
