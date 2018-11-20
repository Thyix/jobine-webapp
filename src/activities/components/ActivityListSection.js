// @flow

import React from 'react';
import styled from 'styled-components';
import { withNamespaces } from 'react-i18next';
import Grid from '@material-ui/core/Grid';
import TitledDivider from '../../main/components/TitledDivider';
import { Metrics } from '../../main/themes';

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
      <Grid item xs={12}>
        <StyledTitledDivider id="sectionTitle" title={'this is my activity section'} />
      </Grid>
        {activities}
    </React.Fragment>
  );
};

export default withNamespaces('general')(ActivityListSection);