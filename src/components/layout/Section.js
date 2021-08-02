import styled from 'styled-components';

const Section = ({ Icon, title, color, selected }) => {
  return (
    <SectionDiv
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </SectionDiv>
  );
};
export default Section;

const SectionDiv = styled.div`
  display: flex;
  align-items: center;
  border-bottom-width: 2px;
  min-width: 200px;
  cursor: pointer;
  color: grey;
  border-width: 0 !important;

  :hover {
    background-color: whitesmoke;
    border-width: 3px !important;
  }

  > h4 {
    font-size: 14px;
    margin-left: 15px;
  }
`;
