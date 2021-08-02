import styled from 'styled-components';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import LaunchIcon from '@material-ui/icons/Launch';
import ClearIcon from '@material-ui/icons/Clear';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { useContext, useEffect, useState } from 'react';
import { StateContext } from '../../../contexts/stateContext';
import useFetchData from '../../../utils/useFetchData';
import CreateContact from '../../buttons/CreateContact';

const drawerWidth = 240;

const contactColors = ['#D4C2FC', '#F7A278', '#ACF39D', '#AEF3E7', 'FAE1DD'];

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

const ContactsDrawer = () => {
  const classes = useStyles();

  const { open, setOpen } = useContext(StateContext);
  const [contacts, setContacts] = useState(null);
  const data = useFetchData(`../contacts.js`);
  // const { createContact, setCreateContact } = useContext(StateContext);

  useEffect(() => {
    if (!data) return;
    setContacts(data);
  }, [data]);
  return (
    <>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='right'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <div>Contacts</div>
          <IconsWrapper>
            <IconBackground>
              <SearchIcon />
            </IconBackground>
            <IconBackground>
              <LaunchIcon />
            </IconBackground>
            <IconBackground>
              <ClearIcon onClick={() => setOpen(!open)} />
            </IconBackground>
          </IconsWrapper>
        </div>
        <ContactsListWrapper>
          <ContactListHeader>
            Contacts&nbsp;
            <span>{contacts && `(${contacts.length})`}</span>
            <Create>
              <CreateContact />
            </Create>
          </ContactListHeader>
          {contacts &&
            contacts.map((contact, index) => {
              return (
                <ContactsWrapper key={`contact-${index}`}>
                  <IconWrapper title={contact.icon}>
                    <ProfileIcon style={{ color: `${contactColors[index]}` }} />
                  </IconWrapper>
                  <InfoWrapper title={contact.name}>
                    <NameWrapper>{contact.name}</NameWrapper>
                    <EmailWrapper>{contact.email}</EmailWrapper>
                  </InfoWrapper>
                </ContactsWrapper>
              );
            })}
        </ContactsListWrapper>
      </Drawer>
    </>
  );
};

export default ContactsDrawer;

const ContactsListWrapper = styled.div`
  height: calc(100% - 64px);
`;
const Create = styled.div`
  padding: 10px 0 10px 0;
`;
const ContactListHeader = styled.div`
  letter-spacing: 0.07272727em;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1rem;
  text-transform: uppercase;
  color: #3c4043;
  padding: 16px 16px 8px 16px;
  word-wrap: break-word;
`;

const ProfileIcon = styled(AccountCircleIcon)`
  border-radius: 50%;
  height: 36px;
  width: 36px;
  border: none;
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

const ContactsWrapper = styled.div`
  margin-left: 8px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-content: center;
  align-items: center;
  border-radius: 4px;
  display: flex;
  min-height: 56px;
  cursor: pointer;
`;

const InfoWrapper = styled.div`
  flex: 1;
  min-width: 0;
  padding: 4px 0;
  class: visible;
`;

const IconWrapper = styled.div`
  display: flex;
  class: visible;
`;

const NameWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
  padding: 4px 0;
  letter-spacing: 0.01428571em;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #202124;
`;

const EmailWrapper = styled.div`
  letter-spacing: 0.025em;
  font-family: Roboto, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #5f6368;
`;
