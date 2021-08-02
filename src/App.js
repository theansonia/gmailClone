import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import { useContext } from 'react';
import { StateContext } from './contexts/stateContext';
import styled from 'styled-components';
const drawerWidth = 240;

function App() {
  const { open } = useContext(StateContext);

  return (
    <Router>
      <Wrapper active={open}>
        <Header />
        <Main drawerWidth={drawerWidth} />
      </Wrapper>
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
  width: ${(props) =>
    props.active ? `calc(100% - ${drawerWidth}px)` : '100%'};
`;
