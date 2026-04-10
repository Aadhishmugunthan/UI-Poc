import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import Card from "./components/Card/Card"

import "./styles/layout.css"

function App() {
  return (
    <div>

      <Navbar />

      <div className="layout">

        <Sidebar />

        <div className="grid">

          <Card />
          <Card />
          <Card />
          <Card />

        </div>

      </div>

    </div>
  )
}

export default App