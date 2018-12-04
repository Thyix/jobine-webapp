// @flow
// @flow

import React from 'react';
import { connect } from 'react-redux';
import posed from 'react-pose';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { changeTab, updateSelectedUser } from '../../offers/actions/offersActions';
import Scenes from '../../main/navigation/Scenes';
import { IconButton, Avatar } from '@material-ui/core';
import Book from '@material-ui/icons/Book';
import { Metrics, Fonts, Colors } from '../../main/themes';

const ContactContainer = styled.div`
  width: 100% !important;
  background-color: ${Colors.highlightedBackground};
  display: flex;
  margin-bottom: ${Metrics.spacing.small}px !important;
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
`;

const ActionIconButton = styled(IconButton)`
  background-color: ${Colors.primary} !important;
  color: ${Colors.secondary} !important;
  width: ${Metrics.icons.medium}px !important;
  height: ${Metrics.icons.medium}px !important;
  padding: 0px !important;
  margin-left: ${Metrics.spacing.small}px !important;
`;

const PosedActions = posed.div({
  visible: { opacity: 1, x: 0, marginLeft: 0, transition: { marginLeft: { duration: 300 } } },
  hidden: { opacity: 0, x: 75, marginLeft: '-40px', transition: { marginLeft: { duration: 300 } }  }
});

type Props = {
  contact: Profile,
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

export class SearchListItem extends React.Component<Props, State> {

  state = {
    hovered: false,
  };

  onContactClicked = () => {
    this.props.history.push(Scenes.Contact);
    this.props.actions.changeTab(3);
    this.props.actions.updateSelectedUser(this.props.contact);
  };

  render() {
    const { contact } = this.props;

    return (
      <ContactContainer
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      >
        <Identification onClick={this.onContactClicked}>
          <div>
            <Avatar src={contact.imgUser || 'https://krourke.org/img/md_avatar_stormtrooper.svg'} />
          </div>
          <TextContainer>
            <Name>
              <span id="contactName">{contact.nameUser}</span>
            </Name>
          </TextContainer>
        </Identification>

        <PosedActions pose={this.state.hovered ? 'visible' : 'hidden'}>
          <Actions>
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
      changeTab,
      updateSelectedUser,
    }, dispatch),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchListItem));