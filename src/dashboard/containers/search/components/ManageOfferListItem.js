// @flow
// @flow

import React from 'react';
import { connect } from 'react-redux';
import posed from 'react-pose';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { IconButton, Avatar } from '@material-ui/core';
import Book from '@material-ui/icons/Book';
import { Metrics, Fonts, Colors } from '../../../../main/themes';

const ContactContainer = styled.div`
  width: 100% !important;
  background-color: ${Colors.highlightedBackground};
  padding-top: ${Metrics.spacing.tiny}px !important;
  padding-bottom: ${Metrics.spacing.tiny}px !important;
  margin-left: ${Metrics.spacing.huge}px !important;
  margin-right: ${Metrics.spacing.huge}px !important;
  margin-top: ${Metrics.spacing.small}px !important;
  margin-bottom: ${Metrics.spacing.tiny}px !important;
  display: flex;
  justify-content: space-between;
  border-radius: ${Metrics.spacing.medium}px;
  align-items: center;
  &:hover {
    cursor: pointer !important;
    background-color: ${Colors.backgroundLight} !important;
  }
`;

const TextContainer = styled.div`
  display: flex !important;
  flex-direction: column !important;
  align-items: left !important;
  color: ${Colors.primary} !important;
  justify-content: center !important;
  margin-left: ${Metrics.spacing.tiny}px !important;
`;

const Name = styled.div`
  ${Fonts.toCSS(Fonts.medium())}
  margin-left: ${Metrics.spacing.medium}px !important;
`;

const Identification = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 10px !important;
`;

const ActionIconButton = styled(IconButton)`
  background-color: ${Colors.primary} !important;
  color: ${Colors.secondary} !important;
  width: ${Metrics.icons.medium}px !important;
  height: ${Metrics.icons.medium}px !important;
  padding: 0px !important;
  margin-left: ${Metrics.spacing.tiny}px !important;
`;

const PosedActions = posed.div({
  visible: { opacity: 1, x: 0, marginLeft: 20, transition: { marginLeft: { duration: 300 } } },
  hidden: { opacity: 0, x: 75, marginLeft: '-40px', transition: { marginLeft: { duration: 300 } }  }
});

type Props = {
  offer: Offer,
  history: {
    push: Function,
  },
  actions: {
    changeTab: (id: number) => Promise<void>,
    updateSelectedUser: (user: Profile) => Promise<void>,
  }
}

type State = {
  hovered: boolean,
}

export class ManageOfferListItem extends React.Component<Props, State> {

  state = {
    hovered: false,
  };

  onContactClicked = () => {
  };

  render() {

    return (
      <ContactContainer
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      >
        <Identification onClick={this.onContactClicked}>
          <div>
            <Avatar src={this.props.offer.imgOffer || 'https://krourke.org/img/md_avatar_stormtrooper.svg'} />
          </div>
          <TextContainer>
            <Name>
              <span id="contactName">{this.props.offer.titleOffer}</span>
            </Name>
            <Name>
              <span id="contactName">{this.props.offer.addressOffer}</span>
            </Name>
          </TextContainer>
        </Identification>

        <PosedActions pose={this.state.hovered ? 'visible' : 'hidden'}>
          <Actions>
            <ActionIconButton id="phoneButton" onClick={() => this.onContactClicked()}>
              <Book fontSize="small" />
            </ActionIconButton>
            <ActionIconButton id="phoneButton" onClick={() => this.onContactClicked()}>
              <Book fontSize="small" />
            </ActionIconButton>
          </Actions>
        </PosedActions>
      </ContactContainer>
    );
  }

}

function mapStateToProps(state: any, ownProps: Props) {
  return {
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
    }, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageOfferListItem));