import { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import styled from 'styled-components';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const ExplainStarred = forwardRef(function ExplainStarred(props, emailRef) {
  const classes = useStyles();

  const handleClose = () => {
    props.setStarred(false);
  };
  return (
    <div>
      <Modal
        ref={emailRef}
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={props.starred}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.starred}>
          <div className={classes.paper}>
            {props.starred && (
              <Wrapper>
                <Fetch>{`fetch('./messages/${props.id} ', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "starred": true,s
    })
  }).then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error:', error);
      });
      `}</Fetch>
                <Note>
                  This request would be creating a new property and setting
                  boolean as value.setData would reset all of the email data in
                  local state. **Please note currently b/c of the modal being
                  used to explain the fetches, the star loses it's state. Please
                  note setData would happen in a different component than this
                  modal
                </Note>
              </Wrapper>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
});
export default ExplainStarred;

const Wrapper = styled.div`
  width: 100%;
  font-size: 0.675rem;
  letter-spacing: 0.2px;
  line-height: 20px;
  padding: 0;
  margin: 0;
`;

const Fetch = styled.div``;
const Note = styled.div`
  margin-top: 15px;
  font-weight: bold;
`;
