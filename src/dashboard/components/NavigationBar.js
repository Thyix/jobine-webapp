// @flow

import React from 'react';
import { withRouter } from 'react-router';
import { AppBar, Toolbar } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTab } from '../../offers/actions/offersActions';
import styled from 'styled-components';
import Scenes from '../../main/navigation/Scenes';
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
  actions: {
    changeTab: (id: number) => Promise<void>,
  }
};

type State = {
};

class NavigationBar extends React.Component<Props, State> {

  goToDashboard() {
    this.props.actions.changeTab(0);
    this.props.history.push(Scenes.Recents);
  }

  render() {
    return (
      <StyledAppBar position="static">
        <StyledToolbar>
          <StyledDiv>
            <StyledLogoContainer onClick={() => this.goToDashboard()}>
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

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      changeTab,
    }, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavigationBar));