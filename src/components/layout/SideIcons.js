import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import { useContext } from 'react';
import { StateContext } from '../../contexts/stateContext';

const SideIcons = () => {
  const { setOpen, openSettings, setOpenSettings } = useContext(StateContext);

  const handleOpenContacts = () => {
    if (openSettings) {
      setOpenSettings(false);
    }
    setOpen(true);
  };
  return (
    <Wrapper>
      <img
        alt='calendar thumbnail'
        src='	https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png'
      />

      <img
        alt='keep thumbnail'
        src='https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png'
      />
      <img
        alt='task thumbnail'
        src='https://upload.wikimedia.org/wikipedia/commons/5/57/Google_Tasks_Clovenbob.png'
      />
      <img
        alt='contacts thumbnail'
        src='https://www.gstatic.com/companion/icon_assets/contacts_2x.png'
        title='Contacts'
        onClick={handleOpenContacts}
      />
      <hr />
      <AddIcon />
    </Wrapper>
  );
};

export default SideIcons;
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 50px) 1px 50px;
  place-items: center;
  border-left: 1px solid whitesmoke;
  cursor: pointer;

  img {
    width: 100%;
    background-size: 25px;
    max-height: 22px;
    max-width: 22px;
    object-fit: contain;
    border-radius: 50%;
    :hover {
      box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%),
        0 4px 8px 3px rgb(60 64 67 / 15%);
      background-color: #fafafb;
    }
  }

  hr {
    width: 60%;
    border-color: whitesmoke;
  }
`;
