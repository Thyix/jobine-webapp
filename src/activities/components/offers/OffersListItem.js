// @flow

import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import Avatar from '../../../main/components/Avatar';
import { ContactInfo } from '../../../main/components/ContactInfo';
import { Colors, Metrics } from '../../../main/themes';

const BaseRow = styled(Grid)`
  padding-left: ${Metrics.spacing.huge}px !important;
  padding-right: ${Metrics.spacing.huge}px !important;
  padding-top: 0px !important;
  padding-bottom: ${Metrics.spacing.small}px !important;
  display: flex;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCard = styled(Card)`
  height: ${Metrics.card.activity.height}px;
  display: flex;
  width: 100%;
`;

const Content = styled(CardContent)`
  align-items: center;
  display: flex;
  flex: 1;
  padding-bottom: 0 !important;
  padding-top: 0 !important;
  justify-content: space-between;
`;

const StyledTypography = styled(Typography)`
  color: ${Colors.primaryText} !important;
`;

const Duration = styled(StyledTypography)`
  margin-right: ${Metrics.spacing.gigantic}px !important;
`;

const CallIcon = styled(IconButton)`
  background-color: ${Colors.primary} !important;
  color: white !important;
  padding: 0 !important;
  height: ${Metrics.icons.large}px !important;
  width: ${Metrics.icons.large}px !important;
`;
const LeftZone = styled.div`
  display: flex;
`;

const RightZone = styled.div`
  display: flex;
`;

const StyledAvatar = styled(Avatar)`
  margin-right: ${Metrics.spacing.small}px !important;
`;

type Props = {
};

type State = {
  expanded: boolean
}

export class ActivityListItem extends React.Component<Props, State> {

  static defaultProps = {
    alignSummary: 'right'
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      expanded: false,
    }
  }

  render() {
    return (
      <BaseRow item xs={12}>
        <StyledCard>
          <Content>
            <LeftZone>
              <StyledAvatar displayName={'un avatar'} />
              <ContactInfo displayName={'nom de contact'} number={'num/ro d;entreprise'} />
            </LeftZone>

            {this.props.summary}

            <RightZone>
              <FlexDiv>
                <Duration>
                  {'12:03:03'}
                </Duration>
              </FlexDiv>
            </RightZone>
          </Content>
        </StyledCard>
      </BaseRow>
    );
  }

}

export default ActivityListItem;