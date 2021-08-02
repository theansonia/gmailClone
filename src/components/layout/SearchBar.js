import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import ClearIcon from '@material-ui/icons/Clear';
import styled from 'styled-components';
import { createRef, useContext, useState } from 'react';
import { useEffect } from 'react';
import { StateContext } from '../../contexts/stateContext';
import Filters from './modals/Filters';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(false);
  const { openFilters, setOpenFilters } = useContext(StateContext);
  const ref = createRef();

  useEffect(() => {
    if (query.length === 0) setActive(false);
  }, [active, query]);

  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    setActive(true);
  };

  const handleClear = () => {
    setActive(false);
    setQuery('');
  };

  return (
    <SearchBarWrapper active={active}>
      <SearchIconWrapper />
      <input
        type='text'
        placeholder='Search mail'
        value={query}
        onChange={handleChange}
      />
      {active && query.length > 0 && (
        <Clear onClick={handleClear} data-testid='clearBtn' />
      )}
      <FilterIcon onClick={() => setOpenFilters(!openFilters)} />
      {ref && <Filters ref={ref} />}
    </SearchBarWrapper>
  );
};

export default SearchBar;

const SearchBarWrapper = styled.div`
  background-color: #f1f3f4;
  max-width: 750px;
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.active ? `10% auto 7% 7%` : '10% auto 7%'};
  place-items: center;
  height: 45px;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: background 100ms ease-in, width 100ms ease-out;
  .MuiSvgIcon-root {
    font-size: 0.85rem;
  }
  :focus-within {
    background: none;
    box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%),
      0 4px 8px 3px rgb(60 64 67 / 15%);
  }

  input {
    width: 100%;
    height: auto;
    background: none;
    border: none;
    font-size: 16px;
    z-index: 6;
    cursor: text;

    :focus {
      outline: none;
      background-color: white;
    }
    :focus-visible {
      outline-offset: 0px;
    }
  }
`;

const SearchIconWrapper = styled(SearchIcon)`
  color: #5f6368;
`;

const FilterIcon = styled(FilterListIcon)`
  color: #5f6368;
  cursor: pointer;
`;

const Clear = styled(ClearIcon)`
  color: #5f6368;
  cursor: pointer;
`;
