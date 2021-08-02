import styled from 'styled-components';
import { Checkbox } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { IconButton } from '@material-ui/core';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { createRef, useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { StateContext } from '../../contexts/stateContext';
import ExplainStarred from '../layout/modals/ExplainStarred';
import ExplainImportant from '../layout/modals/ExplainImportant';
const EmailRow = ({ id, from, subject }) => {
  const emailRef = createRef();
  const history = useHistory();
  const [important, setImportant] = useState(false);
  const [starred, setStarred] = useState(false);
  const [read] = useState(false);
  const { folder } = useContext(StateContext);

  const handleClickStar = () => {
    setStarred(!starred);
    // here, we would make post request using customhook instead ofusing the temp modal
  };

  const handleClickImportant = () => {
    setImportant(!important);
  };
  return (
    <Wrapper>
      <Checkbox />
      <IconButton onClick={handleClickStar} data-testid='star'>
        {starred ? <StarIcon htmlColor='#f7cb69' /> : <StarBorderIcon />}
      </IconButton>
      {emailRef && (
        <ExplainStarred starred={starred} setStarred={setStarred} id={id} />
      )}
      <IconButton onClick={handleClickImportant}>
        {important ? (
          <YellowLabel style={{ color: 'green[400]' }}>
            <LabelImportantOutlinedIcon />
          </YellowLabel>
        ) : (
          <LabelImportantOutlinedIcon />
        )}
      </IconButton>
      {emailRef ? (
        <ExplainImportant
          important={important}
          setImportant={setImportant}
          id={id}
        />
      ) : null}
      <SidebarLink to={`/${folder}/${id}`} id={id}>
        <EmailWrapper onClick={() => history.push(`/${folder}/${id}`)}>
          <From className={!read && 'unread'}>{from}</From>
          <Subject className={!read && 'unread'}>{subject}</Subject>
          <Id className={!read && 'unread'}>{id}</Id>
        </EmailWrapper>
      </SidebarLink>
    </Wrapper>
  );
};

export default EmailRow;

const Wrapper = styled.div`
  border-bottom: 1px solid lightgray;
  align-items: center;
  cursor: pointer;
  padding-right: 20px;
  font-size: 13px;
  display: flex;
  height: 50px;
  ${'' /* width: calc(100% - 240px); */}
  :hover {
    border-top: 1px solid whitesmoke;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.24);
  }

  .unread {
    color: black;
    font-weight: bolder;
  }
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
`;

const EmailWrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 360px 50px;
  grid-template-areas: 'a a a a b b b b c c c c';
`;

const From = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 5px;
  padding-right: 5px;
`;

const Subject = styled.p`
  padding-right: 50px;
  flex: 0.3;
`;

const Id = styled.p`
  font-size: 12px;
  font-weight: bold;
  align-self: end;
  grid-area: c;
`;

const YellowLabel = styled.div`
  .MuiSvgIcon-root {
    color: yellow;
  }
`;
