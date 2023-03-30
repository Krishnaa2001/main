import * as React from 'react';   
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabBarHeightContext, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcon from '@reacticons/ionicons';
 

import HomeScreen from './Screen/Home';
import VehicleScreen from './Screen/Vehicle';
import ProfileScreen from './Screen/Profile';
import NotificationScreen from './Screen/Notification';

//screen names
const HomeName='Home';
const vehicleName='Vehicle';
const profileName='Profile';
const notificationName='Notification';

const Tab = createBottomTabNavigator();   

export default function MainContainer() {

return (
<NavigationContainer>
    <Tab.Navigator
    initialRouteName={HomeName}
    screenOptions = {({route}) => ({
        tabBarIcon: ({focused, color, size}) =>{
             let iconName;
             let rn =route.name;
             if (rn == HomeName) {
                iconName = focused ? 'Home': 'home-outline'
             } else if ( rn == vehicleName ){
                iconName = focused ? 'list': 'list-outline'
             } else if ( rn == profileName ){
                iconName = focused ? 'profile': 'profile-outline'
             }else if ( rn == notificationName ){
                iconName = focused ? 'notification': 'notification-outline'
             }
             return <IonIcon name={iconName} size={size} color={color}/>

        },
    })}
    >
    <Tab.Screen name={HomeName} component={HomeScreen }/>
    <Tab.Screen name={vehicleName} component={VehicleScreen }/>
    <Tab.Screen name={profileName} component={ProfileScreen }/>
    <Tab.Screen name={notificationName} component={NotificationScreen }/>
         
    </Tab.Navigator>
</NavigationContainer>
);
}