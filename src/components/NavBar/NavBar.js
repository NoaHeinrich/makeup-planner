import React, {useState} from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = () => {

  const [collapsed, setCollapsed] = useState(true)

  const toggleNav = () => setCollapsed(!collapsed)

  return(
    <div>
      <Navbar color='faded' light>
        <NavbarBrand href="/" className="mr-auto">Makeup-planner</NavbarBrand>
        <NavbarToggler onClick={toggleNav} className="mr-2"></NavbarToggler>
        <Collapse isOpen={!collapsed} navbar>
          <Nav>
            <NavItem>
              <NavLink href="/brands">Makeup by brand</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/categories">Makeup by category</NavLink>
            </NavItem>          
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar