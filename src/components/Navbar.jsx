// components/Navbar.jsx
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex gap-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/sobre" className="hover:underline">Sobre</Link>
      <Link to="/contato" className="hover:underline">Contato</Link>
    </nav>
  )
}

export default Navbar