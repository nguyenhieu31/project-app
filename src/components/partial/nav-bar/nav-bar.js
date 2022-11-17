import styled from 'styled-components';
import Logo from '../../UI/logo/logo';
import Information from '../information/information'
import SideBarMenu from '../side-bar-menu/side-bar-menu'
const StyleNavBar = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 2rem;
  transition: all 0.1s ease-in-out;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  transition: top 0.5s;
  .container{
    display: grid;
    grid-template-columns: 57% 43%;
  }
  .logo{
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .logo_link{
    background: url('https://www.popsockets.com/on/demandware.static/Sites-AMER-Site/-/en_US/v1667797420334/images/logo.svg') no-repeat center;
    background-size: contain;
    width: 210px;
    height: 60px;
    display: block;
  }
  .menu_nav{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    margin: 0;
    padding: 0;
  }
  .menu_nav>li{
    list-style: none;
    color: #181818;
  }
  .nav_item .search{
    color: #181818;
    font-size: 1rem;
    width: 100px;
  }
`
const NavBar = () => {
  return (
    <StyleNavBar className="header">
      <div className="container">
        <Logo />
        <Information />
      </div>
      <div className="menu">
        <SideBarMenu />
      </div>
    </StyleNavBar>
  );
}
var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").style.top = "0";
  } else {
    document.querySelector(".header").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}
export default NavBar;