import { Outlet } from 'react-router-dom';
import { AppNav, NavItem, NavLinkStyled, NavLinks } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <AppNav>
        <NavLinks>
          <NavItem>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled to="/tweets">Tweets</NavLinkStyled>
          </NavItem>
        </NavLinks>
      </AppNav>
      <Outlet />
    </>
  );
};

export default Layout;
