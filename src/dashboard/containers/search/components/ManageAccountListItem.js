// @flow

import React from 'react';
import { connect } from 'react-redux';
import posed from 'react-pose';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import Scenes from '../../../../main/navigation/Scenes';
import { IconButton, Avatar } from '@material-ui/core';
import Delete from '@material-ui/icons/Delete';
import { deleteContact, fetchProfiles } from '../../../../authentication/actions/authenticationActions';
import { changeTab, updateSelectedUser } from '../../../../offers/actions/offersActions';
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
  contact: Profile,
  history: {
    push: Function,
  },
  actions: {
    changeTab: (id: number) => Promise<void>,
    updateSelectedUser: (contact: Profile) => Promise<void>,
    deleteContact: (contact: Profile) => Promise<void>,
    fetchProfiles: () => Promise<void>,
  }
}

type State = {
  hovered: boolean,
}

export class ManageAccountListItem extends React.Component<Props, State> {

  state = {
    hovered: false,
  };

  onContactClicked() {
    this.props.actions.changeTab(3);
    this.props.actions.updateSelectedUser(this.props.contact);
    this.props.history.push(Scenes.ManageAccounts);
  };

  onDeleteContactClicked() {
    this.props.actions.deleteContact(this.props.contact);
    this.props.actions.fetchProfiles();
  }

  render() {

    return (
      <ContactContainer
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      >
        <Identification onClick={() => this.onContactClicked()}>
          <div style={{ marginLeft: Metrics.spacing.medium }}>
            <Avatar src={this.props.contact.imgUser || 'https://krourke.org/img/md_avatar_stormtrooper.svg'} />
          </div>
          <TextContainer>
            <Name>
              <span id="contactName">{this.props.contact.nameUser}</span>
            </Name>
            <Name>
              <span id="contactName">{this.props.contact.jobUser}</span>
            </Name>
          </TextContainer>
        </Identification>

        <PosedActions pose={this.state.hovered ? 'visible' : 'hidden'}>
          <Actions>
            <ActionIconButton style={{ backgroundColor: Colors.error }} id="phoneButton" onClick={() => this.onDeleteContactClicked()}>
              <Delete fontSize="small" />
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
      changeTab,
      updateSelectedUser,
      deleteContact,
      fetchProfiles,
    }, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ManageAccountListItem));