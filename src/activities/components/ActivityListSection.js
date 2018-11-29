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
}
export const ActivityListSection = ({ activities }: Props) => {
  console.log('received activities', activities);
  return (
    <React.Fragment>
      <Grid item xs={12} style={{ marginLeft:'15px', marginRight:'15px' }}>
        <StyledTitledDivider id="sectionTitle" title={'this is my activity section'} />
      </Grid>
      {activities.map(a => 
        <Typography key={a.idOffer} style={{ marginLeft: '25px', flexDirection:'column' }}>{a.titleOffer}</Typography>
      )}
    </React.Fragment>
  );
};

export default withNamespaces('general')(ActivityListSection);