import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchBar from './SearchBar';
import HeaderIcons from './HeaderIcons';
import { Link } from 'react-router-dom';
import { createRef, useContext } from 'react';
import { StateContext } from '../../contexts/stateContext';

const Header = () => {
  const { openSettings } = useContext(StateContext);
  const ref = createRef();
  return (
    <Wrapper active={openSettings} data-testid='header' ref={ref}>
      <LogoWrapper>
        <Menu>
          <MenuIcon />
        </Menu>
        <Link to='/'>
          <Logo>
            <img
              alt='gmail icon'
              src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png'
            />
          </Logo>
        </Link>
      </LogoWrapper>
      <SearchWrapper>
        <SearchBar />
      </SearchWrapper>
      <HeaderIcons />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 170px;
  border-bottom: 1px solid lightgrey;
  height: 70px;
  align-items: center;
  min-width: 100%;
  width: ${(props) => (props.active ? `calc(100% - 240px)` : '100%')};
`;

const LogoWrapper = styled.div`
  height: 45px;
  display: grid;
  grid-template-columns: 25% auto;
`;

const Logo = styled.div`
  display: flex;
  height: 45px;
`;

const Menu = styled.div`
  display: grid;
  place-items: center;
`;
const SearchWrapper = styled.div``;
