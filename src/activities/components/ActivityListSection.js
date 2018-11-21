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
  activities: string,
}
export const ActivityListSection = ({ activities }: Props) => {
  return (
    <React.Fragment>
      <Grid item xs={12} style={{marginLeft:'15px', marginRight:'15px'}}>
        <StyledTitledDivider id="sectionTitle" title={'this is my activity section'} />
      </Grid>
        <Typography style={{marginLeft: '25px'}}>{activities}</Typography>
    </React.Fragment>
  );
};

export default withNamespaces('general')(ActivityListSection);