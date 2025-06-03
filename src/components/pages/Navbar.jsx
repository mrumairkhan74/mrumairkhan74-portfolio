import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react' // Icon library (optional)
import NavBackground from '../background/NavBackground'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="relative w-full shadow-md sticky my-5 left-0 z-50 rounded-md overflow-hidden">
        <NavBackground/>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="./images/logo.png"
            alt="Logo"
            className="h-10 w-10 drop-shadow-md rounded-md animate-bounce"
          />
          <span className="text-xl font-bold text-purple-600">MyPortfolio</span>
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 space-y-2 shadow-md">
          <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
          <NavLink to="/projects" onClick={() => setIsOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
        </div>
      )}
    </header>
  )
}

// Custom NavLink component
const NavLink = ({ to, children, ...props }) => (
  <Link
    to={to}
    className="block text-purple-600 text-lg font-mono tracking-wide text-gray-700 hover:bg-purple-500 hover:text-white px-4 py-2 rounded transition-all"
    {...props}
  >
    {children}
  </Link>
)

export default Navbar
