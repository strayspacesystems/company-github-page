import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import { Navbar, Container, Nav } from "react-bootstrap";
import { useAuthContext } from "../../contexts/AuthContext";

import Home from "../pages/Home/Home";

import "./Navbar.scss";

const NavBar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();

  return (
    <>
      <div className="nav-bar">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className="nav-heading">
              <NavLink to="/"><img src="assets/img/logo800px.png" class="img-fluid logo" alt="" /></NavLink>
            </Navbar.Brand>
            <Nav className="nav-links">
              <a className={({ isActive }) => (isActive ? "active" : "")} href="#problem">About</a>

              <a className={({ isActive }) => (isActive ? "active" : "")} href="#team">Team</a>

              <a className={({ isActive }) => (isActive ? "active" : "")} href="#contact">Contact</a>
            </Nav>
          </Container>
        </Navbar>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default NavBar;
