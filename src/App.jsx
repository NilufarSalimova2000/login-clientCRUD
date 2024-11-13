import { Routes, Route } from "react-router-dom"
import { Login } from "./pages/login/login"
import { MainLayout } from "./layout/main-layout"
import { Clients } from "./pages/clients/clients"
import { Debt } from "./pages/debt"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<Clients />} />
          <Route path="debt" element={<Debt />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
