import * as React from 'react';
import { View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreen from './Screen/Home';
import VehicleScreen from './Screen/Vehicle';
import ProfileScreen from './Screen/Profile';
import NotificationScreen from './Screen/Notification';

//screen names
const homeName='Home';
const vehicleName='Vehicle';
const profileName='Profile';
const notificationName='Notification';

const Tab = createBottomTabNavigator();

export default function MainScreen() {

return(
<NavigationContainer>
    <Tab.Navigator
    initialRouteName={homeName}
    screenOptions={({route})} => ({
        tabBarIcon:
    })

         
    </Tab.Navigator>
</NavigationContainer>
);
}