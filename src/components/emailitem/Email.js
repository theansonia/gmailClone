import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import ErrorIcon from '@material-ui/icons/Error';
import DeleteIcon from '@material-ui/icons/Delete';
import MarkunreadRoundedIcon from '@material-ui/icons/MarkunreadRounded';
import WatchlaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import LabelIcon from '@material-ui/icons/Label';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';
import { useHistory, useParams } from 'react-router-dom';
import { createRef, useContext, useEffect, useState } from 'react';
import { StateContext } from '../../contexts/stateContext';
import useFetchData from '../../utils/useFetchData';
import ExplainDeleteEmail from '../layout/modals/ExplainDeleteEmail';

function Email(props) {
  const history = useHistory();
  let { id } = useParams();
  const data = useFetchData(`../messages/${id}.js`, 'json');
  const { setEmail, email } = useContext(StateContext);
  const deleteRef = createRef();
  const [deleteEmail, setDeleteEmail] = useState(false);

  useEffect(() => {
    if (!data) return;
    setEmail(data);
  }, [data, setEmail]);

  return (
    <Wrapper data-testid='email'>
      <EmailTools>
        <EmailToolsLeft>
          <IconButton onClick={() => history.push('/Inbox')}>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <ArchiveIcon />
          </IconButton>

          <IconButton>
            <ErrorIcon />
          </IconButton>

          <IconButton
            onClick={() => {
              setDeleteEmail(true);
            }}
          >
            <DeleteIcon />
          </IconButton>
          {deleteRef && (
            <ExplainDeleteEmail
              deleteEmail={deleteEmail}
              setDeleteEmail={setDeleteEmail}
              id={id}
              ref={deleteRef}
            />
          )}
          <IconButton>
            <MarkunreadRoundedIcon />
          </IconButton>

          <IconButton>
            <WatchlaterIcon />
          </IconButton>

          <IconButton>
            <CheckCircleIcon />
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <LabelIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </EmailToolsLeft>
      </EmailTools>
      <EmailBody>
        <EmailBodyHeader>
          <EmailHeader>{email ? email.subject : `(no subject)`}</EmailHeader>
          <EmailImportant />
          <EmailToolsRight>
            <IconButton>
              <UnfoldMoreIcon />
            </IconButton>

            <IconButton>
              <PrintIcon />
            </IconButton>

            <IconButton>
              <LaunchOutlinedIcon />
            </IconButton>
          </EmailToolsRight>
        </EmailBodyHeader>
        <p>{email?.from}</p>
        <p> {email?.to}</p>
        <p> {email?.date}</p>

        <EmailMessage>
          <p>{email?.body}</p>
        </EmailMessage>
      </EmailBody>
    </Wrapper>
  );
}

export default Email;

const Wrapper = styled.div`
  flex: 1;
  background-color: whitesmoke;
  width: 100%;
  height: 100%;
`;
const EmailTools = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;

  .MuiSvgIcon-root {
    width: 0.75rem;
    height: 0.75rem;
  }
`;

const EmailToolsLeft = styled.div`
  display: flex;
`;

const EmailToolsRight = styled.div`
  display: flex;
  font-size: 0.875rem;
  margin-left: auto;

  .MuiSvgIcon-root {
    width: 0.75rem;
    height: 0.75rem;
  }
`;

const EmailBody = styled.div`
  margin: 0 16px 0 0;
  padding: 20px 0 8px 72px;
  background-color: white;
  height: 100vh;
  ${'' /* box-shadow: 0px 5px 7px 0px rgba(0, 0, 0, 0.24); */}
`;

const EmailBodyHeader = styled.div`
  display: flex;
  color: #202124;
  font-size: 1rem;
  margin: 0;
  margin-bottom: 10px;
`;

const EmailHeader = styled.div`
  border-bottom: 1px solid whitesmoke;
  font-weight: 500;
  align-items: center;
`;

const EmailImportant = styled(LabelImportantIcon)`
  color: #e8ab02 !important;
  font-size: 1rem !important;
  padding-left: 25px;
  padding-top: 4px;
  opacity: 0.54;
`;

const EmailMessage = styled.div`
  margin-top: 10px;
  > p {
    margin-right: 20px;
    overflow-wrap: break-word;
  }
`;
