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
  titleOffer: string,
  descriptionOffer: string,
  domainOffer: string,
  daysOffer: string,
  imgOffer: string,
}

let mounted = false;

export class ProfileItem extends React.Component<Props, State> {

  state = {
    titleOffer: "Titre de l'offre",
    descriptionOffer: "Description de tâche",
    domainOffer: "Domaine associé",
    daysOffer: "Durée de l'offre",
    imgOffer: "https://www.dentistfriend.com//uploads/praxisimages/dental-jobs-opp.png"
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
            <Card style={{marginTop: Metrics.spacing.large, marginBottom: Metrics.spacing.medium, maxWidth:'350px'}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Offer image card"
                  height="140"
                  image={this.state.imgOffer}
                  title="Offer image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                  {this.state.titleOffer}
                  </Typography>
                  <Typography component="p">
                  {this.state.descriptionOffer}
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
                  onChange={(event) => mounted && this.setState({ titleOffer: event.target.value })}
                  type="text"
                  value={this.state.titleOffer}
                />

                <StyledTextField
                  id="emailField"
                  label={"Description de la tâche"}
                  onChange={(event) => mounted && this.setState({ descriptionOffer: event.target.value })}
                  type="text"
                  autoComplete="email"
                  value={this.state.descriptionOffer}
                />

                <StyledTextField
                  id="descriptionField"
                  label={"Domaine associé"}
                  onChange={(event) => mounted && this.setState({ domainOffer: event.target.value })}
                  type="text"
                  autoComplete="description"
                  value={this.state.domainOffer}
                />

                <StyledTextField
                  id="imgField"
                  label={'Durée du mandat'}
                  onChange={(event) => mounted && this.setState({ daysOffer: event.target.value })}
                  autoComplete="imgLink"
                  type="text"
                  value={this.state.daysOffer}
                />

                <StyledTextField
                  autoComplete="jobField"
                  id="jobField"
                  label={"Image représentant le mandat"}
                  onChange={(event) => mounted && this.setState({ imgOffer: event.target.value })}
                  type="text"
                  value={this.state.imgOffer}
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