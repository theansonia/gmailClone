import styled from 'styled-components';
import Sidebar from './Sidebar';
import EmailsView from './EmailsView';
import SideIcons from './SideIcons';
import { Switch, Route, Redirect } from 'react-router-dom';
import Email from '../emailitem/Email';
import ContactsDrawer from './modals/ContactsDrawer';
import { useContext } from 'react';
import { StateContext } from '../../contexts/stateContext';
import SettingsDrawer from './modals/SettingsDrawer';

const Main = () => {
  const { folder, openSettings } = useContext(StateContext);

  return (
    <Wrapper data-testid='main' active={openSettings}>
      <Sidebar />
      <Switch>
        <Route exact path='/' component={EmailsView}>
          <Redirect to='Inbox' />
        </Route>
        <Route exact path={`/${folder}/:id`} component={Email} />
        <Route path='*' component={EmailsView} />
      </Switch>
      <SideIcons />
      <SettingsDrawer />
      <ContactsDrawer />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 50px;
  width: ${(props) => (props.active ? `calc(100% - 240px)` : '100%')};
`;
