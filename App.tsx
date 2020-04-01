import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ApiEndPoint, WorkerId } from './src/assets/data/workerId';

import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import UserScreen from './src/components/screens/user/user';
import MatchesScreen from './src/components/screens/matches/matches';
import JobScreen from './src/components/screens/job/job';
import Logo from './src/components/common/logo';

import { User, Job } from 'src/Interface/interface';


import userInit from './src/assets/data/user.json';
import jobInit from './src/assets/data/job.json';

type RootStackParamList = {
  Matches: undefined,
  'My Profile': undefined,
  Job: { job: Job }
}

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [user, setUser] = useState<User>(userInit);
  const [matches, setMatches] = useState<Job[]>([]);

  const userName = user.firstName + ' ' + user.lastName;

  const fetchData = async () => {
    const httpEndpoint: string = ApiEndPoint + WorkerId;

    let profile = await axios(`${httpEndpoint}/profile`);
    let matches = await axios(`${httpEndpoint}/matches`);

    setUser(profile.data);
    setMatches(matches.data);

  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator
        initialRouteName="Matches"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitle: props => <Logo />,
        }}
      >
        <Stack.Screen name="Matches">
          {props => <MatchesScreen {...props} matches={matches} name={userName} />}
        </Stack.Screen>

        <Stack.Screen name="My Profile">
          {props => <UserScreen {...props} user={user} />}
        </Stack.Screen>

        <Stack.Screen name="Job" initialParams={{ job: jobInit }}>
          {props => <JobScreen {...props} name={userName} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}