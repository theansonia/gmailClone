import styled from 'styled-components';
import Compose from '../buttons/Compose';
import { sidebarButtonItems } from '../buttons/sidebarButtonItems';
import { useContext, useState, useEffect } from 'react';
import { StateContext } from '../../contexts/stateContext';
import { Link } from 'react-router-dom';
import { useFetchData } from '../../utils/useFetchData';

const Sidebar = () => {
  const data = useFetchData('/folders.js');
  const [folders, setFolders] = useState([]);
  const { setFolder } = useContext(StateContext);

  useEffect(() => {
    if (!data) return;
    setFolders(data);
  }, [data]);

  return (
    <Wrapper>
      <TopSectionWrapper>
        <ComposeWrapper>
          <Compose />
        </ComposeWrapper>

        <SideButtonsWrapper>
          {folders &&
            folders.map((folder, index) => (
              <SidebarLink to={`/${folder}`} key={`${folder}-link-${index}`}>
                <SideBarItemWrapper
                  key={`${folder}-wrapper-${index}`}
                  onClick={() => setFolder(folder)}
                >
                  <SidebarButtonItem key={`${folder}-${index}`}>
                    {sidebarButtonItems[folder] || sidebarButtonItems['Label']}
                    <SidebarText key={`${folder}-text-${index}`}>
                      {folder}
                    </SidebarText>
                  </SidebarButtonItem>
                </SideBarItemWrapper>
              </SidebarLink>
            ))}
        </SideButtonsWrapper>
      </TopSectionWrapper>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  border-right: 1px solid lightgray;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
`;

const TopSectionWrapper = styled.div``;

const ComposeWrapper = styled.div`
  display: grid;
  place-items: start;
  padding: 10px 20px;
`;

const SideButtonsWrapper = styled.div``;

const SideBarItemWrapper = styled.div``;

const SidebarButtonItem = styled.div`
  display: grid;
  grid-template-columns: 14% auto;
  color: gray;
  padding: 5px 25px;
  border-radius: 0 100px 100px 0;
  cursor: pointer;
  margin-right: 8px;
  align-items: center;

  :hover {
    background-color: #f5f7f7;
  }
`;

const SidebarText = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.2px;
  color: #202124;
`;

const SidebarLink = styled(Link)`
  text-decoration: none;
`;
