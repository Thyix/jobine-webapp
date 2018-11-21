// @flow

import React from 'react';
import ActivityListSection from './ActivityListSection';

type Props = {
  dailyActivities: string,
};

const ActivityList = ({ dailyActivities }: Props) => {
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