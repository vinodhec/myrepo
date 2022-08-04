import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, IconRegistry } from '@ui-kitten/components';
import { default as theme } from './theme.json'; // <-- Import app theme
import { TabThemingShowcase } from './TabView';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const HomeScreen = () => (
  <Layout >
    <TabThemingShowcase></TabThemingShowcase>
    {/* <Text category='h1'>HOME</Text>
    <Text category='h2'>HOME</Text>

    <Text category='h3'>HOME</Text>

    <Text category='h4'>HOME</Text>

    <Text category='h5'>HOME</Text>
    <Text category='s1'>HOME</Text>
    <Text category='s2'>HOME</Text>
    <Text category='p1'>HOME</Text>
    <Text category='p2'>HOME</Text>

    <Text category='c1'>HOME</Text>
    <Text category='c2'>HOME</Text>
    <Text category='label'>HOME</Text>
    <Text appearance='hint'>HOME</Text>
    <Text appearance='alternative'>HOME</Text>
    <Text category='label' status="primary">HOME</Text>
    <Text category='label' status="success">HOME</Text>
    <Text category='label' status="info">HOME</Text>
    <Text category='label' status="warning">HOME</Text>
    <Text category='label' status="danger">HOME</Text>
    <Text category='label' status="basic">HOME</Text>
    <Text category='label' status="control">HOME</Text> */}

  </Layout>
);

export const App = () => (
  <React.Fragment>
  <IconRegistry icons={EvaIconsPack} />
  <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
    <HomeScreen />
  </ApplicationProvider>
  </React.Fragment>

);