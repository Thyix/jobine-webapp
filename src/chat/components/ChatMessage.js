// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { Colors, Metrics, Fonts } from '../../main/themes';
import Message from '../domain/Message';

const StyledMessage = styled(Grid)`
  border-radius: 25px !important;
  padding-left: ${Metrics.spacing.medium}px !important;
  padding-right: ${Metrics.spacing.medium}px !important;
  padding-top: ${Metrics.spacing.small}px !important;
  padding-bottom: ${Metrics.spacing.small}px !important;
`;

const SentMessage = styled.div`
  background-color: ${Colors.secondaryBackground};
  color: ${Colors.contrastingText};
`;

const MissedOrReceivedMessage = styled(Message)`
  background-color: ${Colors.backgroundLight};
  color: ${Colors.primaryText};
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextSent = styled.div`
  display: flex;
  align-self: flex-end;
`;

const TimeSent = styled.div`
  display: flex;
  align-self: flex-start;
  ${Fonts.toCSS(Fonts.xsmall())}
`;

const TextReceived = styled.div`
  display: flex;
  align-self: flex-start;
`;

const TimeReceived = styled.div`
  display: flex;
  align-self: flex-end;
  ${Fonts.toCSS(Fonts.xsmall())}
`;

type Props = {
  chatMessage: Message,
  received: boolean,
}


class ChatMessage extends React.Component<Props> {
  render() {
      return (
        <MessageContent>
          {this.props.received ?
            <React.Fragment>
              <StyledMessage style={{ backgroundColor: this.props.received ? Colors.primary : Colors.neutral}}>
              <TextReceived style={{ color: this.props.received ? Colors.secondary : Colors.secondary }}>{this.props.chatMessage.contentMsg}</TextReceived>
              <TimeReceived>{moment(Date.parse(this.props.chatMessage.dateMsg.replace("[UTC]", ""))).format('DD/MM/YYYY')}</TimeReceived>
              </StyledMessage>
            </React.Fragment>
            :
            <React.Fragment>
              <StyledMessage>
                <TextSent>{this.props.chatMessage.contentMsg}</TextSent>
                <TimeSent>{moment(Date.parse(this.props.chatMessage.dateMsg.replace("[UTC]", ""))).format('DD/MM/YYYY')}</TimeSent>
              </StyledMessage>
            </React.Fragment>
          }
        </MessageContent>
      );
    }
} 
export default ChatMessage;