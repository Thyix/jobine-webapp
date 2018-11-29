// @flow

import React from 'react';
import ActivityListSection from './ActivityListSection';
import moment from 'moment';
import Offer from '../../offers/domain/Offer';

type Props = {
  dailyActivities: Offer[],
};

const ActivityList = ({ dailyActivities }: Props) => {
  console.log('activity', dailyActivities);
  return (
    <React.Fragment>
          <ActivityListSection
            activities={dailyActivities}
          />
    </React.Fragment>
  );
};

export default ActivityList;