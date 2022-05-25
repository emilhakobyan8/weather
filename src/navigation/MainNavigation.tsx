import React, {useRef} from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import {RootRoutes, RootStack, RootStackParamList} from './routes';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const MainNavigation = (): React.ReactElement => {
  const navigationRef: React.RefObject<
    NavigationContainerRef<RootStackParamList>
  > = useRef(null);

  return (
    <>
      <StatusBar barStyle="light-content" animated={true} />
      <NavigationContainer ref={navigationRef}>
        <RootStack.Navigator>
          <RootStack.Screen
            name={RootRoutes.Home}
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainNavigation;
