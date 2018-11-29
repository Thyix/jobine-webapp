// @flow

import React from 'react';
import ActivityListSection from './ActivityListSection';
import Offer from '../../offers/domain/Offer';

type Props = {
  dailyActivities: Offer[],
  tab: string
};

const ActivityList = ({ dailyActivities, tab }: Props) => {
  return (
    <React.Fragment>
          <ActivityListSection
            activities={dailyActivities}
            tab={tab}
          />
    </React.Fragment>
  );
};

export default ActivityList;