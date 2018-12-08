// @flow

import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import moment from 'moment';
import { bindActionCreators } from 'redux'; 
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';
import { getSession } from '../../authentication/selectors/authenticationSelectors'; 
import { getChatUser } from '../../offers/selectors/offerSelector';
import { createMessage, fetchMessages } from '../actions/chatActions'; 
import { Metrics, Colors } from '../../main/themes';
import Message from '../domain/Message';
import Profile from '../../authentication/domain/Profile';
import { getMessages } from '../selector/chatSelector';

const ChatInputContainer = styled.div`
  display: flex !important;
  height: 45px !important;
  width: 100% !important;
  min-height: 45px !important;
  border-top: 1px solid ${Colors.divider};
  align-items: center important;
  padding-top: ${Metrics.spacing.small}px !important;
  padding-left: ${Metrics.spacing.small}px !important;
  padding-right: ${Metrics.spacing.small}px important; 
`;

const TextFieldContainer = styled.div`
  display: flex !important;
  flex-grow: 1 !important;
`;

const AttachFileContainer = styled.div`
  display: flex;
  padding-left: ${Metrics.spacing.small}px;
  padding-right: ${Metrics.spacing.small}px;
  padding-top: ${Metrics.spacing.tiny}px;
`;

type Props = {
  session: Profile,
  chatUser: Profile,
  messages: Message[],
  actions: {
    createMessage: (message: Message) => Promise<void>,
  }
}
type State = {
  message: string,
  sending: boolean,
}
export class SendMessage extends React.Component<Props, State> {

  state = {
    message: '',
    sending: false,
  };

  activitiesContainerEnd: any;

  reset = () => this.setState({ message: '' });

  sendMessage = async () => {
    const newMessage = Message.parseNew(this.state.message, moment(), this.props.messages.length + 2, 0, this.props.session.idUser, this.props.chatUser.idUser);
    try {
      this.props.actions.createMessage(newMessage);
      this.setState({ message: '', sending: true });
    } finally {
      this.setState({ sending: false });
    }
  }

  userPressedKey = (key: string) => {
    if (key === 'Enter') {
      this.sendMessage();
    }
  }

  render() {

    return (
      <ChatInputContainer style={{ backgroundColor: Colors.highlightedBackground}}>
        <TextFieldContainer>
          <TextField
            fullWidth
            id="messageTextField"
            disabled={!this.props.chatUser}
            onChange={(event)=> this.setState({ message: event.target.value })}
            onKeyPress={(event) => this.userPressedKey(event.key)}
            placeholder={'Vous pouvez entrer un message'}
            value={this.state.message}
          />
        </TextFieldContainer>

        <AttachFileContainer>
          <AttachFileIcon id="attachFileButton" />
        </AttachFileContainer>

        <AttachFileContainer>
          <SendIcon disabled={this.state.sending} id="sendButton" onClick={this.sendMessage} type="submit" />
        </AttachFileContainer>

      </ChatInputContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    session: getSession(state),
    chatUser: getChatUser(state),
    messages: getMessages(state),
  };
}

function mapDispatchToProps(dispatch: Function) {
  return {
    actions: bindActionCreators({
      createMessage,
      fetchMessages,
    }, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SendMessage);