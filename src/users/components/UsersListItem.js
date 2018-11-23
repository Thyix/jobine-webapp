// @flow

import React from 'react';
import styled from 'styled-components';
import { IconButton, Avatar } from '@material-ui/core';
import Book from '@material-ui/icons/Book';
import { Metrics, Fonts, Colors } from '../../main/themes';

const ContactContainer = styled.div`
  width: 100% !important;
  display: flex;
  margin-bottom: ${Metrics.spacing.small}px !important;
  justify-content: space-between;
  border-radius: ${Metrics.spacing.medium}px;
  &:hover {
    cursor: pointer !important;
    background-color: ${Colors.highlightedBackground} !important;
  }
`;

const TextContainer = styled.div`
  display: flex !important;
  flex-direction: column !important;
  align-items: left !important;
  color: ${Colors.primaryText} !important;
  justify-content: center !important;
  margin-left: ${Metrics.spacing.tiny}px !important;
`;

const Name = styled.div`
  ${Fonts.toCSS(Fonts.medium())}
`;

const Identification = styled.div`
  display: flex;
  flex-grow: 1;
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

type Props = {
  contact: Profile,
  history: {
    push: Function,
  },
}

type State = {
  hovered: boolean,
}

class ContactListItem extends React.Component<Props, State> {
  
  state = {
    hovered: false,
  }

  onContactClicked = () => {
    this.props.onContactPress(this.props.contact);
  }

  render() {
    const { contact } = this.props;
    const imgLink = contact.imgUser === '' ? 'https://krourke.org/img/md_avatar_stormtrooper.svg' : contact.imgUser;
    

    return (
      <ContactContainer 
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      >
        <Identification>
          <div>
            <Avatar alt="Unknown contact avatar" src={imgLink}>#</Avatar>
          </div>
          <TextContainer>
            <Name>
              <span id="contactName">{contact.nameUser}</span>
            </Name>
          </TextContainer>
        </Identification>
        {this.state.hovered &&
          <Actions>
            <ActionIconButton id="phoneButton" onClick={() => {}}>
              <Book fontSize="small" />
            </ActionIconButton>
          </Actions>
        }
      </ContactContainer>
    );
  }

}


export default ContactListItem;