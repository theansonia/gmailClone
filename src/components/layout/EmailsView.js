import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { useContext, useEffect, useState } from 'react';
import { StateContext } from '../../contexts/stateContext';
import EmailRow from '../emailitem/EmailRow';
import Section from './Section';
import { useFetchData } from '../../utils/useFetchData';

const EmailsView = () => {
  const { folder } = useContext(StateContext);
  const data = useFetchData(`./folders/${folder}.js`);
  const [inboxData, setInboxData] = useState();
  const { open } = useContext(StateContext);

  useEffect(() => {
    if (!data) return;
    setInboxData(data);
  }, [data, folder]);

  return (
    <Wrapper active={open}>
      <TopWrapper>
        <Checkbox />
        <IconButton>
          <RefreshIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </TopWrapper>
      <EmailSections>
        <Section Icon={InboxIcon} title='Primary' color='red' selected />
        <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
        <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
      </EmailSections>
      <EmailsContainer>
        {inboxData
          ? inboxData.map(({ 'message-id': id, from, subject }) => (
              <EmailRow key={id} id={id} from={from} subject={subject} />
            ))
          : null}
      </EmailsContainer>
    </Wrapper>
  );
};

export default EmailsView;
const Wrapper = styled.div`
  width: ${(props) => (props.active ? `calc(100%)` : '100%')};
`;
const TopWrapper = styled.div`
  display: flex;
  ${'' /* padding: 0 16px 0 16px; */}
  height: 48px;
  transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid lightgray;
  .MuiSvgIcon-root {
    color: rgba(0, 0, 0, 0.54);
    font-size: 24px;
  }
`;
const EmailsContainer = styled.div`
  .MuiSvgIcon-root {
    color: rgba(0, 0, 0, 0.54);
    font-size: 24px;
  }
`;

const EmailSections = styled.div`
  height: 48px;
  position: sticky;
  top: 0;
  display: flex;
  padding-left: 8.5px;
  border-bottom: 1px solid lightgray;
  background-color: white;
  z-index: 999;
  padding-right: 10px;

  .MuiSvgIcon-root {
    font-size: 24px;
  }
`;
