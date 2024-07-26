import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import styled from "@emotion/styled";
// This code appears to be written in
//  JavaScript and uses the React library for
//   building user interfaces. The code defines 
//   styled components using the styled utility from the "@emotion/styled" package. 
//   The styled components are used to create a navigation bar (Nav), navigation links 
//   (NavLink), a logo (Logo), a menu icon (Bars), and other related components.

export const Nav = styled.nav`
  background: transparent;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;  
`;

export const NavLink = styled(ScrollLink)`
  color: rgb(119, 119, 121);
  display: flex;
  font-size: 1.2rem;
  align-items: center;
  height: 100%;
  cursor: pointer;
  &:hover {
    color: #f6f6f6;
  }
`;
export const Logo = styled('div')`
  img {
    width: 47px;
    height: 47px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  font-size: 1.8rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  .menu-item + .menu-item {
    margin-left: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
