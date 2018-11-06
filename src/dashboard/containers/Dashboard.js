// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar';
import LoginScene from '../../authentication/containers/LoginScene';
import { isAuthenticated } from  '../../authentication/selectors/authenticationSelectors'; 
import { Colors } from '../../main/themes';

type Props = {
  authenticated: boolean,
  history: any,
};

const PageRoot = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`;

const Header = styled.div`
  flex: 0 1 auto;
`;

const StyledContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
`;

export const Dashboard = ({ authenticated }: Props) => {
  console.log('receive props');
  return (
    <BrowserRouter>
      {!authenticated ?
        <LoginScene />
        :
        <PageRoot>
          <Header>
            <NavigationBar />
          </Header>

          <StyledContainer id="main-container">
              <Switch>
              </Switch>
          </StyledContainer>
        </PageRoot>
      }
    </BrowserRouter>
  );
};

const mapStateToProps = (state: any) => {
  return {
    authenticated: isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(Dashboard);