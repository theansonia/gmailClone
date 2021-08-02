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

const ExplainCreateContact = forwardRef(function ExplainCreateContact(
  props,
  contactRef
) {
  const classes = useStyles();
  const { createContact, setCreateContact } = useContext(StateContext);

  const handleClose = () => {
    setCreateContact(false);
  };
  return (
    <div>
      <Modal
        ref={contactRef}
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={createContact}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={createContact}>
          <div className={classes.paper}>
            {createContact && (
              <Wrapper>
                <Fetch>{`fetch('./contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": "Anson Avellar",
        "email": "user.user@example.com",
        "icon": "https://example.com/users/roe.jpg" // please note the data for the body sent in the post request would likely be compiled in a dynamic way and the variable storing the data would be here especially since the user may not give us all the info that they can
    })
  }).then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error:', error);
      });
      `}</Fetch>
                <Note>
                  Set Data would take all the returned response with the new
                  contact and reset the local state of contacts. Please note
                  setData would happen in a different component than this modal
                </Note>
              </Wrapper>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
});
export default ExplainCreateContact;

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
