// import React, { useState } from 'react';
// import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
// import { NavLink } from 'react-router-dom';

// function Header(props) {

//     const [isNavOpen, setNavOpen] = useState(false);

//     const toggleNav = () => {
//         setNavOpen(!isNavOpen);
//     }

//     return (
//         <React.Fragment>
//             <Navbar dark sticky="top" expand="md">
//                 <NavbarToggler onClick={toggleNav} />
//                 <Collapse isOpen={isNavOpen} navbar>
//                     <Nav navbar className="mr-auto">
//                         <NavItem>
//                             <NavLink className="nav-link" to="/home">
//                                 Home
//                                 </NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink className="nav-link" to="/pairing">
//                                 Pairing
//                                 </NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink className="nav-link" to="/suggest">
//                                 Suggestion
//                                 </NavLink>
//                         </NavItem>
//                     </Nav>
//                     <NavbarBrand className="navbar-brand d-none d-md-block" href="/">
//                         <img src="assets/images/hang_logo.png" height="30" width="30" alt="Hang Logo" />Hang
//                     </NavbarBrand>
//                     <div className="ml-auto xs={mx-auto}">
//                         <a className="nav-link-icon" href="/"><i className="fa fa-android  fa-fw fa-lg" ></i></a>
//                         <a className="nav-link-icon" href="/"><i className="fa fa-apple fa-fw fa-lg"></i></a>
//                         <a className="nav-link-icon" href="mailto:nickkniola@me.com"><i className="fa fa-envelope fa-fw fa-lg"></i></a>
//                     </div>
//                 </Collapse>
//                 <NavbarBrand className="navbar-brand text-white d-block d-md-none mx-auto pr-4" href="/">
//                     <img src="assets/images/hang_logo.png" height="30" width="30" alt="Hang Logo" />Hang
//                 </NavbarBrand>
//             </Navbar>
//         </React.Fragment>
//     );
// }

// export default Header;