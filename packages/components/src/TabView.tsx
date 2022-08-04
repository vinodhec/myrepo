import React from 'react';
import {StyleSheet} from 'react-native'
import { Icon, Tab, TabBar, TabView,Layout,Text } from '@ui-kitten/components';
import { ListItemSimpleUsageShowcase } from './List-Item';

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);

const BellIcon = (props) => (
  <Icon {...props} name='bell-outline'/>
);

const EmailIcon = (props:any) => (
  <Icon {...props} name='email-outline'/>
);
export const TabThemingShowcase = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <TabView
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      <Tab icon={PersonIcon} title='Fruits'>
        <Layout style={styles.tabContainer}>
          <Text category='h5'>USERS</Text>
        </Layout>
      </Tab>
      <Tab icon={BellIcon} title='Veggies'>
       <ListItemSimpleUsageShowcase /> 
      </Tab>
      <Tab icon={EmailIcon} title='Groceries'>
        <Layout style={styles.tabContainer}>
          <Text category='h5'>TRANSACTIONS</Text>
        </Layout>
      </Tab>
    </TabView>
  );
};

const styles = StyleSheet.create({
    tabContainer: {
      height: 64,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  