import { useContext, forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { StateContext } from '../../../contexts/stateContext';
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

const ExplainFetches = forwardRef(function ExplainFetches(props, ref) {
  const classes = useStyles();
  const { openNewEmail, setOpenNewEmail } = useContext(StateContext);

  const handleClose = () => {
    setOpenNewEmail(false);
  };
  return (
    <div>
      <Modal
        ref={ref}
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={openNewEmail}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openNewEmail}>
          <div className={classes.paper}>
            {openNewEmail && (
              <Wrapper>
                <Fetch>{`fetch('./messages/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "from": "User Name<user.user@example.com>",
    "id": "098ddd",
    "subject": "There would be some subject",
    "to": "To Somebody<some.body@example.com>",
    "date": new Date(),
    "body": "body of the email would be converted here" // please note the data for the body sent in the post request would likely be compiled in a dynamic way and the variable storing the data would be here. 
    })
  }).then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error:', error);
      });
      `}</Fetch>
                <Note>
                  setData would reset all of the email data in local state.
                  Please note setData would happen in a different component than
                  this modal
                </Note>
              </Wrapper>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
});
export default ExplainFetches;

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
