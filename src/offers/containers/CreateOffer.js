// @flow 
// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, TextField, Button, CardMedia, Card, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators }  from 'redux';
import { fetchMessages } from '../actions/offersActions';
import { Medias, Metrics } from '../../main/themes';
import Profile from '../../dashboard/containers/tabs/Profile';

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

const StyledImage = styled(CardMedia)`
width: 20% !important;
height: 15% !important;
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
            <Card style={{marginTop: Metrics.spacing.large}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Offer image card"
                  height="140"
                  image="https://blogs.ufv.ca/science/files/2018/01/job.opportunity.jpg"
                  title="Offer image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  Preview
                  </Typography>
                  <Typography component="p">
                    Ceci est le preview de la description de l'offre
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="secondary">
                  Postuler
                </Button>
                <Button size="small" color="secondary">
                  En savoir plus
                </Button>
              </CardActions>
            </Card>

                <React.Fragment>
                <StyledTextField
                  autoComplete="username"
                  id="usernameField"
                  label={"Titre de l'offre"}
                  onChange={(event) => mounted && this.setState({ nameUser: event.target.value })}
                  type="text"
                  value={this.state.nameUser}
                />

                <StyledTextField
                  id="emailField"
                  label={"Description de la tâche"}
                  onChange={(event) => mounted && this.setState({ emailUser: event.target.value })}
                  type="text"
                  autoComplete="email"
                  value={this.state.emailUser}
                />

                <StyledTextField
                  id="descriptionField"
                  label={"Domaine associé"}
                  onChange={(event) => mounted && this.setState({ descriptionUser: event.target.value })}
                  type="text"
                  autoComplete="description"
                  value={this.state.descriptionUser}
                />

                <StyledTextField
                  id="imgField"
                  label={'Durée du mandat'}
                  onChange={(event) => mounted && this.setState({ imgUser: event.target.value })}
                  autoComplete="imgLink"
                  type="text"
                  value={this.state.imgUser}
                />

                <StyledTextField
                  autoComplete="jobField"
                  id="jobField"
                  label={"Image représentant le mandat"}
                  onChange={(event) => mounted && this.setState({ jobUser: event.target.value })}
                  type="text"
                  value={this.state.jobUser}
                />
              </React.Fragment>

              <UpdateButton
                color="primary"
                id="goToDomainButton"
                onClick={() => this.props.actions.fetchMessages()}
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
    session: Profile,
  };
};

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      fetchMessages,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileItem);