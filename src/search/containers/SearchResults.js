// @flow

import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography/Typography';
import { withRouter } from 'react-router';
import { Colors, Fonts, Metrics } from '../../main/themes';

const Container = styled.div`
  height: 750px;
  width: 100%;
`;

const Spacer = styled.div`
  margin-top: ${Metrics.spacing.large}px !important;
`;


const Results = styled.div`
  display: flex !important;
  max-height: 100% !important;
  padding: ${Metrics.spacing.huge}px;
`;
const MessagesResult = styled.div`
  flex: 1 !important;
  margin-left: ${Metrics.spacing.medium}px !important;
`;

const Title = styled(Typography)`
  color: ${Colors.accent} !important;
  font-weight: bold !important;
  margin-bottom: ${Metrics.spacing.small}px; 
  ${Fonts.toCSS(Fonts.medium())}
`;

const Scrollable = styled.div`
  height: 100%;
  overflow-y: auto;
`;

const PaddedDiv = styled.div`
  padding: ${Metrics.spacing.huge}px;
`;

type Props = {
  history: {
    push: Function,
  },
};
type State = {};

export class SearchResults extends React.PureComponent<Props, State> {

  render() {
    const { query } = this.props;
    
    if (!query) {
      return (
        <Container>
          <Scrollable>
            <PaddedDiv>
              Récentes recherches --
    
              <Spacer />
    
              Récentes entreprises --
            </PaddedDiv>
          </Scrollable>
        </Container>
      );
    }
  
    return (
      <Container>
          <Scrollable>
            <Results id="results">
  
              <MessagesResult>
                <Title>{'Tests'}</Title>
                <Typography>{'Aucune entreprise a été trouvée'}</Typography>
              </MessagesResult>
            </Results>
          </Scrollable>
      </Container>
    );
  }

};

export default withRouter(SearchResults);