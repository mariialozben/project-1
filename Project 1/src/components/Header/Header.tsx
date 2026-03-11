import { useState, useEffect, useRef } from 'react'
import './Header.css'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleMouseDown)
    return () => document.removeEventListener('mousedown', handleMouseDown)
  }, [])

  return (
    <header className="header">
      <div className="header-logo">
        <span className="header-logo-text">Mariia</span>
      </div>
      <div className="header-user" ref={dropdownRef}>
        <button className="header-user-trigger" onClick={() => setIsOpen(o => !o)}>
          <span className="header-avatar">JD</span>
          <span className="header-username">John Doe</span>
          <span className="header-chevron">▾</span>
        </button>
        {isOpen && (
          <ul className="header-dropdown">
            <li>Profile</li>
            <li>Settings</li>
            <li>Logout</li>
          </ul>
        )}
      </div>
    </header>
  )
}

export default Header
