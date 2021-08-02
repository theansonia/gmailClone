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
    zIndex: '9999999',
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

const ExplainDeleteEmail = forwardRef(function ExplainDeleteEmail(
  props,
  deleteRef
) {
  const classes = useStyles();

  const handleClose = () => {
    props.setDeleteEmail(false);
  };
  return (
    <div>
      <Modal
        ref={deleteRef}
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={props.deleteEmail}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.deleteEmail}>
          <div className={classes.paper}>
            {props.deleteEmail && (
              <Wrapper>
                <Fetch>{`fetch('./messages/${props.id}, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('Error:', error);
      });
      `}</Fetch>
                <Note>
                  This request will permanenly delete the email from whatever
                  database the backend is using to store email data. SetData
                  will reset all of the local state with the email now
                  permanenly deleted.
                </Note>
              </Wrapper>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
});
export default ExplainDeleteEmail;

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
