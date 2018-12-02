// @flow

import React from 'react';
import ActivityListSection from './ActivityListSection';

type Props = {
  dailyActivities: [],
  tab: string,
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