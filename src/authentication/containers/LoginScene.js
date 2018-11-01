// @flow

import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Settings from '@material-ui/icons/Settings';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { withNamespaces } from 'react-i18next';
import { Images, Colors, Fonts, Medias, Metrics } from '../../main/themes';

const Background = styled.div`
  background: url(${Images.background}) no-repeat center center fixed !important;
  background-size: stretch;
  height: 100%;
  width: 100%;
  background-color: ${Colors.primaryBackground};
  ${Medias.xs} {
    display: none !important;
  }
  ${Medias.md} {
    display: block !important;
  }
`;

const StyledContainer = styled.div`
  display: flex !important;
  height: 100% !important;
  width: 100%;
  position:fixed;

  ${Medias.xs} {
    justify-content: center;
    flex-direction: row;
  }
`;

const JobineLogo = styled.img`
  padding-top: 50px;
  padding-bottom: 25px;
  height: 50px;
  ${Medias.xs} {
    width: 100% !important;
  }
  ${Medias.md} {
    width: 200px !important;
  }
`;

const StyledLoginZone = styled.div`
  display: flex !important;
  justify-content: space-between !important;
  min-width: 300px !important;
  flex-Direction: column !important;
`;

const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${Metrics.spacing.huge}px;
  text-align: center;
`;

const StyledTextField = styled(TextField)`
  margin-top: ${Metrics.spacing.small}px !important;
`;

const LoginButton = styled(Button)`
  margin-top: ${Metrics.spacing.large}px !important;
  border-radius: 20px !important; 
  padding-vertical: ${Metrics.spacing.small}px !important;
`;

const ForgotPassword = styled.p`
  color: ${Colors.neutral};
  ${Fonts.toCSS(Fonts.medium())}
`;

type Props = {
  history: {
    push: Function,
    replace: Function,
  },
  authenticated: boolean,
  authenticating: boolean,
  t: Function,
};

type State = {
  username: string,
  password: string,
  signIn: boolean,
};

export class Login extends React.Component<Props, State> {

  state = {
    username: '',
    password: '',
    signIn: false,
  };

  render() {
    const { t } = this.props;

    return (
      <StyledContainer>
        <StyledLoginZone>
          <StyledLoginForm>
            <JobineLogo alt={'Jobine logo'} src={Images.logo} />

            {this.state.signIn ?
              <React.Fragment>
                <StyledTextField
                  id="domainTextField"
                  label={t('domainConfiguration')}
                  type="text"
                  value={this.props.host || ''}
                />
              </React.Fragment>
              :
              <React.Fragment>
                <StyledTextField
                  autoComplete="username"
                  id="usernameTextField"
                  label={'Nom d\'utilisateur'}
                  onChange={(event) => this.setState({ username: event.target.value })}
                  type="text"
                  value={this.state.username}
                />

                <StyledTextField
                  autoComplete="current-password"
                  id="passwordTextField"
                  label={'Mot de passe'}
                  onChange={(event) => this.setState({ password: event.target.value })}
                  type="password"
                  value={this.state.password}
                />

              </React.Fragment>
            }
              <LoginButton
                color="primary"
                id="goToDomainButton"
                onClick={() => this.setState({ })}
                variant="contained"
              >
                {'Se connecter'}
              </LoginButton>

            {!this.state.showDomain && <ForgotPassword id="forgotPasswordPrompt">{'Mot de passe oublié'} ?</ForgotPassword>}
          </StyledLoginForm>
        </StyledLoginZone>

        <Background />

      </StyledContainer>
    );
  }

}
export default withRouter(withNamespaces('authentication')(Login));