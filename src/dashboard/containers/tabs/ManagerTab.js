// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Medias } from '../../../main/themes';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchOffers } from '../../../offers/actions/offersActions';
import ManageOfferListItem from '../search/components/ManageOfferListItem';
import { getOffer } from '../../../offers/selectors/offerSelector';
import Offer from '../../../offers/domain/Offer';
import { getSession } from '../../../authentication/selectors/authenticationSelectors';

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
}

type State = {}

export class Recents extends React.Component<Props, State> {

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
    const myOffers = this.props.offers && this.props.offers.filter(o => o.idUser === this.props.session.idUser);
    return (
      <Container>
        <MainArea>

          <CallHistoryContainer>
            <Grid container style={{ backgroundColor: 'white', height: '100%', paddingBottom:'50px' }}>
              {myOffers && myOffers.map(o =>
                <ManageOfferListItem key={o.idOffer} offer={o}/>
              )}
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
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      fetchOffers,
    }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Recents);