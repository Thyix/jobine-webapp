// @flow 
// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, TextField, Button, CardMedia, Card, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import moment from 'moment';
import { bindActionCreators }  from 'redux';
import Offer from '../domain/Offer';
import { getSession } from '../../authentication/selectors/authenticationSelectors';
import { createOffer } from '../actions/offersActions';
import { Medias, Metrics } from '../../main/themes';
import Profile from '../../authentication/domain/Profile';

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
  addressOffer: string,
  imgOffer: string,
}

let mounted = false;

export class ProfileItem extends React.Component<Props, State> {

  state = {
    titleOffer: "Preview",
    descriptionOffer: "Veuillez remplir les informations ci-dessous",
    domainOffer: "",
    daysOffer: "",
    addressOffer: "",
    imgOffer: "http://polishlinux.org/wp-content/uploads/2017/11/Preview-2-icon.png"
  }

  componentDidMount() {
    mounted = true;
  }
  
  componentWillUnmount() {
    mounted = false;
  }
  render() {
    console.log('render');
    return (
      <Container>
        <MainArea>

            <Grid container style={{ height: window.screen.height - 295, backgroundColor: 'white', alignItems:'center', flexDirection:'column'}}>
            <Card style={{marginTop: Metrics.spacing.huge, width: '300px'}}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Offer image card"
                  style={{ height: 125, width: 150, marginLeft: 75 }}
                  image={this.state.imgOffer}
                  title="Offer image"
                />
                <CardContent>
                  <div style={{ flexDirection:'row'}}>
                  <Typography gutterBottom variant="h5" component="h2">
                  {this.state.titleOffer}
                  </Typography>
                  </div>
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
                  type="number"
                  value={this.state.daysOffer}
                />

                <StyledTextField
                  autoComplete="addressField"
                  id="addressField"
                  label={"Adresse de l'entreprise"}
                  onChange={(event) => mounted && this.setState({ addressOffer: event.target.value })}
                  type="text"
                  value={this.state.addressOffer}
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
                disabled={this.state.addressOffer === ''}
                id="goToDomainButton"
                onClick={() => this.props.actions.createOffer(Offer.parseNew(
                  this.state.addressOffer,
                  moment(),
                  parseInt(this.state.daysOffer), 
                  this.state.descriptionOffer,
                  this.state.domainOffer,
                  this.state.imgOffer,
                  this.props.session.idUser,
                  this.state.titleOffer),
                  )}
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
    session: getSession(state),
  };
};

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      createOffer,
    }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileItem);