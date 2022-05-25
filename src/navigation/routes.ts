import {createNativeStackNavigator} from '@react-navigation/native-stack';

export enum RootRoutes {
  Home = 'Home',
  AddCity = 'AddCity',
}

export type RootStackParamList = {
  [RootRoutes.Home]: undefined;
  [RootRoutes.AddCity]: undefined;
};

export const RootStack = createNativeStackNavigator<RootStackParamList>();
