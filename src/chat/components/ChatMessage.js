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
  margin-top: ${Metrics.spacing.tiny}px !important;
  margin-bottom: ${Metrics.spacing.tiny}px !important;
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
        <div>
          {this.props.chatMessage !== null && 
          <MessageContent style={{ marginLeft: this.props.received ? Metrics.spacing.small : 1100, marginRight: this.props.received ? 750 : Metrics.spacing.small, }}>
            {this.props.received ?
              <React.Fragment>
                <StyledMessage style={{ backgroundColor: this.props.received ? Colors.disabled : Colors.neutral }}>
                  <TextReceived style={{ color: this.props.received ? Colors.primary : Colors.primary}}>{this.props.chatMessage.contentMsg}</TextReceived>
                  <TimeReceived style={{ color: Colors.primary }}>{this.props.chatMessage.dateMsg instanceof moment ? moment(this.props.chatMessage.dateMsg).format('DD/MM/YYYY') : moment(Date.parse(this.props.chatMessage.dateMsg.replace("[UTC]", ""))).format('DD/MM/YYYY')}</TimeReceived>
                </StyledMessage>
              </React.Fragment>
              :
              <React.Fragment>
                <StyledMessage style={{ backgroundColor: this.props.received ? Colors.disabled : Colors.primary}}>
                  <TextSent style={{ color: this.props.received ? Colors.primary : Colors.secondary }}>{this.props.chatMessage.contentMsg}</TextSent>
                  <TimeSent style={{ color: Colors.secondary }}>{this.props.chatMessage.dateMsg instanceof moment ? moment(this.props.chatMessage.dateMsg).format('DD/MM/YYYY') : moment(Date.parse(this.props.chatMessage.dateMsg.replace("[UTC]", ""))).format('DD/MM/YYYY')}</TimeSent>
                </StyledMessage>
              </React.Fragment>
            }
          </MessageContent>
          }
        </div>
      );
    }
} 
export default ChatMessage;