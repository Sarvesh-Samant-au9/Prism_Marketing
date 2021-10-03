import React from "react";
import styled from "styled-components";
const Navbar = () => {
  return (
    <NavbarContainer>
      <h3>Dogs</h3>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  background-color: rebeccapurple;
  color: white;
  height: 10vh;
  position: sticky;
  top: 0;
  z-index: 1;
  h3 {
    padding-left: 20px;
    font-size: 22px;
  }
`;
export default Navbar;
