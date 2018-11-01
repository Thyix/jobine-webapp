// @flow

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import NavigationBar from '../components/NavigationBar';
import LoginScene from '../../authentication/containers/LoginScene';
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

export default Dashboard;