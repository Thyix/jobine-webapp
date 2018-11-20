// @flow

import React from 'react';
import ActivityListSection from './ActivityListSection';

type Props = {
  dailyActivities: string,
};

const ActivityList = ({ dailyActivities }: Props) => {
  console.log('activityList', dailyActivities);
  return (
    <React.Fragment>
      {Object.keys(dailyActivities)
        .map(() => 
          <ActivityListSection
            key={Math.random()}
            activities={dailyActivities}
          />
        )}
    </React.Fragment>
  );
};

export default ActivityList;