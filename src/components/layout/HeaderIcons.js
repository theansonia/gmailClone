import styled from 'styled-components';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useContext } from 'react';
import { StateContext } from '../../contexts/stateContext';

const HeaderIcons = () => {
  const { setOpenSettings, setOpen, open } = useContext(StateContext);

  const handleOpenSettings = () => {
    setOpenSettings(true);
    if (open) setOpen(false);
  };
  return (
    <IconsWrapper>
      <HelpOutlineIcon />
      <SettingsOutlinedIcon
        data-testid='settings'
        onClick={handleOpenSettings}
      />
      <AppsIcon />
      <AccountCircleIcon />
    </IconsWrapper>
  );
};

export default HeaderIcons;

const IconsWrapper = styled.div`
  margin-left: 8px;
  display: grid;
  grid-template-columns: repeat(4, auto);

  .MuiSvgIcon-root {
    color: #5f6368;
    width: 24px;
    cursor: pointer;
  }
`;
