// @flow

import React from 'react';
import { withRouter } from 'react-router';
import { AppBar, Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import NavigationBarUser from './NavigationBarUser';
import { Images, Colors, Metrics} from '../../main/themes';

const StyledAppBar = styled(AppBar)`
  height: 6em;
  justify-content: center;
  background-color: ${Colors.backgroundLight} !important;
  position: relative !important;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between !important;
`;

const StyledDiv = styled.div`
  display: flex;
`;

const StyledLogoContainer = styled.div`
  max-width: 100px;
  margin-right: 3em;
  align-self: center;
`;

const StyledLogo = styled.img`
  min-width: 100px;
  align-self: center;
`;

type Props = {
  history: {
    push: Function,
  },
  session: string,
};

type State = {
};

class NavigationBar extends React.Component<Props, State> {

  goToDashboard = () => this.props.history.push('/');

  render() {
    return (
      <StyledAppBar position="static">
        <StyledToolbar>
          <StyledDiv>
            <StyledLogoContainer>
              <StyledLogo style={{ marginTop: Metrics.spacing.small, marginLeft: Metrics.spacing.medium }} src={Images.logo} />
            </StyledLogoContainer>
          </StyledDiv>

          <NavigationBarUser
            session={'test'}
            status="online"
          />
        </StyledToolbar>
      </StyledAppBar>
    );
  }

}

export default withRouter(NavigationBar);