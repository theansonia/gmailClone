import { useContext, useState, useEffect, forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { StateContext } from '../../../contexts/stateContext';
import useFetchData from '../../../utils/useFetchData';
import { Checkbox } from '@material-ui/core';
import styled from 'styled-components';
import ClearIcon from '@material-ui/icons/Clear';

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

const Filters = forwardRef(function Filters(props, ref) {
  const classes = useStyles();
  const { openFilters, setOpenFilters } = useContext(StateContext);
  const data = useFetchData('/filters.js');
  const [filters, setFilters] = useState(null);

  useEffect(() => {
    if (!data) return;
    setFilters(data);
  }, [data]);

  const handleClose = () => {
    setOpenFilters(false);
  };

  return (
    <div>
      <Modal
        ref={ref}
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={openFilters}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openFilters}>
          <div className={classes.paper}>
            <ClearWrapper>
              <Clear onClick={handleClose} />
            </ClearWrapper>
            <Header>
              <InnerHeader>
                The following filters are applied to all incoming mail:
              </InnerHeader>
            </Header>

            {filters &&
              filters.map((filter, i) => (
                <FilterWrapper key={`${filter}-filter-${i}`}>
                  <CheckWrapper>
                    <Check />
                  </CheckWrapper>

                  <TitleWrapper>Matches: </TitleWrapper>
                  <DetailsWrapper>
                    <span>
                      {filter['match-field']}:{filter['match-text']}
                    </span>
                    <br></br>
                    <span>
                      Do This: {filter.action} to "{filter.target}"
                    </span>
                  </DetailsWrapper>
                  <EndWrapper>
                    <span style={{ paddingRight: '10px' }}>edit</span>

                    <span>delete</span>
                  </EndWrapper>
                </FilterWrapper>
              ))}
          </div>
        </Fade>
      </Modal>
    </div>
  );
});
export default Filters;

const Header = styled.div`
  width: 100%;
  font-size: 0.875rem;
  font-weight: bold;
  letter-spacing: 0.2px;
  line-height: 40px;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid #e5e5e5;
`;
const InnerHeader = styled.b`
  min-width: 100%;
`;
const DetailsWrapper = styled.div`
  font-weight: bold;
  padding-left: 15px;
`;
const TitleWrapper = styled.div``;

const EndWrapper = styled.div`
  color: #1a73e8;
  margin-left: auto;
`;
const Check = styled(Checkbox)``;

const CheckWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  .MuiSvgIcon-root {
    color: rgba(0, 0, 0, 0.54);
    font-size: 16px;
  }
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #e5e5e5;
  font-size: 0.575rem;
`;

const ClearWrapper = styled.div`
  width: 100%;
  height: 0.5rem;
  .MuiSvgIcon-root {
    font-size: 0.65rem;
  }
`;
const Clear = styled(ClearIcon)`
  left: 102%;
  top: -0.75rem;
  position: relative;
  color: #5f6368;
  cursor: pointer;
  align-self: end;
`;
