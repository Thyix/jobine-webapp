// @flow

import React from 'react';
import styled from 'styled-components';
import { Metrics } from '../../main/themes';

const SidebarContainer = styled.div`
  flex-direction: column;
  flex: 1 !important;
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