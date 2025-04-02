import "./navbar.css"
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar">
        <h3>
            Thapar University        
        </h3>
        
        <ul className="navMenu">
            <li> <Link href='/'>Home</Link> </li>
            <li> <Link href='/calendar'>Calendar</Link> </li>
            <li>Societies</li>
            <li>People</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}
