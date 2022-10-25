import React from "react"
import { BrowserRouter } from "react-router-dom"

import { Routs } from "./routes"

const App: React.FC = () => (
  <BrowserRouter>
    <Routs />
  </BrowserRouter>
)

export default App
