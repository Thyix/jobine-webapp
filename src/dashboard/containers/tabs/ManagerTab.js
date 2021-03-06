// @flow

import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';
import { Medias, Colors, Metrics } from '../../../main/themes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchOffers } from '../../../offers/actions/offersActions';
import ManageOfferListItem from '../search/components/ManageOfferListItem';
import { getOffer } from '../../../offers/selectors/offerSelector';
import Offer from '../../../offers/domain/Offer';
import { getSession, isAdmin } from '../../../authentication/selectors/authenticationSelectors';

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

const MainArea = styled.div`
  display: flex !important;
  height: 100% !important;
  justify-content: space-between !important;
  align-self: stretch !important;
  flex-direction: column !important;
  flex-grow: 1 !important;
`;

const CallHistoryContainer = styled.div`
  flex-grow: 1 !important;
  max-height: 100% !important;
  overflow-y: scroll !important;
`;

type Props = {
  actions: {
    fetchOffers: () => Promise<void>,
    fetchProfiles: () => Promise<void>,
  },
  offers: Offer[],
  admin: boolean,
}

type State = {}

export class ManagerTab extends React.Component<Props, State> {

  state = {}
  
  componentWillMount() {
    this.props.actions.fetchOffers();
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000,
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
    this.props.actions.fetchOffers();
  }
  
  render() {
    let myOffers;
    myOffers = this.props.offers && this.props.offers;
    myOffers = (this.props.admin && this.props.offers) ? this.props.offers : (this.props.offers && this.props.offers.filter(o => o.idUser === this.props.session.idUser));
    return (
      <Container>
        <MainArea>

          <CallHistoryContainer>
            <Grid container style={{ backgroundColor: 'white', height: '100%', paddingBottom:'50px' }}>
              {myOffers && myOffers.map(o =>
                <ManageOfferListItem key={o.idOffer} offer={o}/>
              )}
              {(myOffers && myOffers.length === 0) &&
                <div style={{display:'flex', justifyContent:'center', alignContent:'center', marginLeft: 475,  marginTop: Metrics.spacing.huge}}>
                  <Typography style={{ color: Colors.neutral, fontSize: 25, display:'flex', textAlign:'center'}}>
                    Vous n'avez aucune offre en cours. <br/> Créez-en une pour voir ses informations !
                  </Typography>
                </div>
              }
            </Grid>
          </CallHistoryContainer>

        </MainArea>
      </Container>
    );
  }

}

function mapStateToProps(state) {
  return {
    offers: getOffer(state),
    session: getSession(state),
    admin: isAdmin(state),
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      fetchOffers,
    }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManagerTab);