// @flow

import React from 'react';
import styled from 'styled-components';
import { withNamespaces } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import TitledDivider from '../../main/components/TitledDivider';
import { Metrics } from '../../main/themes';
import { Typography } from '@material-ui/core';

const StyledTitledDivider = styled(TitledDivider)`
  margin-top: ${Metrics.spacing.medium}px;
  margin-bottom: ${Metrics.spacing.large}px;
`;

type Props = {
  activities: Offer,
  tab: string;
}
export const ActivityListSection = ({ activities, tab }: Props) => {
  return (
    <React.Fragment>
      <Grid item xs={12} style={{  marginLeft:'15px', marginRight:'50px' }}>
        <StyledTitledDivider id="sectionTitle" title={tab === 'recents' ? "Fil d'actualité" : "Fil des messages"} />
      </Grid>
      {activities.length > 0 && activities.map(a =>
            <div key={a.idOffer}>
              {tab === 'recents' ? 
              <Typography key={a.idOffer} style={{ marginLeft: '60px', alignSelf:'center', justifyContent:'space-between', color: 'red' }}>{a.titleOffer}</Typography>
              :
              <Typography key={a.idOffer} style={{ marginLeft: '60px', alignSelf:'center', justifyContent:'space-between', color: 'blue' }}>{a.titleOffer}</Typography>
              }
            </div>
      )}
    </React.Fragment>
  );
};

export default withNamespaces('general')(ActivityListSection);