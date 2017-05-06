import React from 'react';
import {cyan600, pink600, purple600, orange600} from 'material-ui/styles/colors';
import Assessment from 'material-ui/svg-icons/action/assessment';
import Face from 'material-ui/svg-icons/action/face';
import ThumbUp from 'material-ui/svg-icons/action/thumb-up';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import InfoBox from '../components/dashboard/InfoBox';
import NewOrders from '../components/dashboard/NewOrders';
import MonthlySales from '../components/dashboard/MonthlySales';
import BrowserUsage from '../components/dashboard/BrowserUsage';
import RecentlyProducts from '../components/dashboard/RecentlyProducts';
import globalStyles from '../styles';
import Data from '../data';
import { Timeline } from 'react-twitter-widgets'

const DashboardPage = (props) => {

  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'justinbieber'
        }}
        options={{
          username: 'justinbieber',
          height: '600'
        }}
        onLoad={() => console.log('Timeline is loaded!')}
      />
    </div>
  );
};

export default DashboardPage;
