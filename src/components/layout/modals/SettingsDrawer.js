import { useContext, useState, useEffect } from 'react';
import { StateContext } from '../../../contexts/stateContext';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import useFetchData from '../../../utils/useFetchData';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
    borderBottom: '1px solid lightgrey',
    height: '71px',
    cursor: 'pointer',
  },
}));
const SettingsDrawer = () => {
  const data = useFetchData(`../settings.js`);
  const [settings, setSettings] = useState(null);
  const classes = useStyles();
  const { openSettings, setOpenSettings } = useContext(StateContext);

  useEffect(() => {
    if (!data) return;
    setSettings(Object.entries(data));
  }, [data]);
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='right'
        open={openSettings}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <div>Quick Settings</div>
          <IconsWrapper>
            <IconBackground>
              <ClearIcon onClick={() => setOpenSettings(false)} />
            </IconBackground>
          </IconsWrapper>
        </div>
        <ListWrapper>
          <HeaderWrapper>Settings</HeaderWrapper>
          {settings &&
            settings.map((setting, i) => (
              <SettingsWrapper key={`${setting}-setting-${i}`}>
                <KeyWrapper>{setting[0]}</KeyWrapper>
                <DetailsWrapper>{setting[1].toString()}</DetailsWrapper>
              </SettingsWrapper>
            ))}
        </ListWrapper>
      </Drawer>
    </>
  );
};

export default SettingsDrawer;

const ListWrapper = styled.div`
  height: calc(100% - 64px);
  min-width: 100%;
`;

const SettingsWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: flex-start;
  font-size: 0.875rem;
  letter-spacing: 0.2px;
  border-top: 1px solid #e5e5e5;
`;
const HeaderWrapper = styled.div`
  letter-spacing: 0.07272727em;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1rem;
  text-transform: uppercase;
  color: #3c4043;
  padding: 16px 16px 8px 16px;
  word-wrap: break-word;
`;

const IconsWrapper = styled.div`
  display: flex;
  .MuiSvgIcon-root {
    color: #5f6368;
    height: 20px;
    width: 20px;
  }
`;

const IconBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border-radius: 50%;
  :hover {
    background-color: lightgray;
    opacity: 0.54;
  }
`;

const DetailsWrapper = styled.div`
  font-size: 0.5rem;
  color: #1a73e8;
  margin: 16px;
`;

const KeyWrapper = styled.div`
  align-items: center;
  font-weight: 500;
  margin: 16px;
`;
