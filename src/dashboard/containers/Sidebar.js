// @flow

import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  flex-direction: column;
  flex: 1;
  position: relative !important;
  height: 100%px !important;
`;


class Sidebar extends React.Component<> {

  render() {
console.log('sidebar');
    return (
      <SidebarContainer>
        Voici un sidebar
      </SidebarContainer>
    );
  }

}

export default Sidebar;