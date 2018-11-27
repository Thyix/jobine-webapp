// @flow 
// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';
import { Avatar } from '@material-ui/core';
import { Medias, Metrics } from '../../main/themes';

const Container = styled(Grid)`
  display: flex !important;
  width: 100% !important;
  height: 100% !important;
  flex-grow: 1 !important;
  align-self: stretch !important;

  ${Medias.xs} {
    flex-direction: column-reverse !important;
  }
  ${Medias.md} {
    flex-direction: row !important;
  }
`;

const StyledAvatar = styled(Avatar)`
width: 100px !important;
height: 100px !important;
align-items: center !important;
margin-top: ${Metrics.spacing.large}px !important;
margin-bottom: ${Metrics.spacing.large}px !important;
`;

const StyledTextField = styled(TextField)`
  width: ${300}px !important;
  margin-top: ${Metrics.spacing.small}px !important;
`;

const MainArea = styled.div`
  display: flex !important;
  height: 100% !important;
  justify-content: space-between !important;
  align-self: stretch !important;
  flex-direction: column !important;
  flex-grow: 1 !important;
`;

const UpdateButton = styled(Button)`
  margin-top: ${Metrics.spacing.large}px !important;
  border-radius: 20px !important; 
  padding-vertical: ${Metrics.spacing.small}px !important;
`;


type Props = {
  session: Profile,
  actions: {
  },
}

type State = {
}

let mounted = false;

export class ProfileItem extends React.Component<Props, State> {

  state = {
  }

  componentDidMount() {
    mounted = true;
  }
  
  componentWillUnmount() {
    mounted = false;
  }
  render() {
    return (
      <Container>
        <MainArea>

            <Grid container style={{ height: '725px', backgroundColor: 'white', alignItems:'center', flexDirection:'column'}}>
                <StyledAvatar/>
                <React.Fragment>
                <StyledTextField
                  autoComplete="username"
                  id="usernameField"
                  label={"Nom d'utilisateur"}
                  onChange={(event) => mounted && this.setState({ nameUser: event.target.value })}
                  type="text"
                  value={this.state.nameUser}
                />

                <StyledTextField
                  id="emailField"
                  label={"Adresse mail"}
                  onChange={(event) => mounted && this.setState({ emailUser: event.target.value })}
                  type="text"
                  autoComplete="email"
                  value={this.state.emailUser}
                />

                <StyledTextField
                  id="descriptionField"
                  label={"Description de votre profil"}
                  onChange={(event) => mounted && this.setState({ descriptionUser: event.target.value })}
                  type="text"
                  autoComplete="description"
                  value={this.state.descriptionUser}
                />

                <StyledTextField
                  id="imgField"
                  label={'Image du profil'}
                  onChange={(event) => mounted && this.setState({ imgUser: event.target.value })}
                  autoComplete="imgLink"
                  type="text"
                  value={this.state.imgUser}
                />

                <StyledTextField
                  autoComplete="jobField"
                  id="jobField"
                  label={"Domaine d'affaire"}
                  onChange={(event) => mounted && this.setState({ jobUser: event.target.value })}
                  type="text"
                  value={this.state.jobUser}
                />
              </React.Fragment>

              <UpdateButton
                color="primary"
                id="goToDomainButton"
                onClick={() => {}}
                variant="contained"
              >
              Ajouter une offre
              </UpdateButton>
              
            </Grid>

        </MainArea>
      </Container>
    );
  }

}

const mapStateToProps = (state: any) => {
  return {
  };
};

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileItem);