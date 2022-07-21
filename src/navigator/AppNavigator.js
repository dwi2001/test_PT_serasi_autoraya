import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListNavigator from './ListNavigator';
import Icon from 'react-native-vector-icons/Ionicons';




const Tab = createBottomTabNavigator();


const Navigasi = (props) => {




    return (
        <Tab.Navigator
        // screenOptions={({ route }) => ({
        //     tabBarIcon: ({ focused, color, size }) => {
        //         let iconName;
        //         if (route.name == 'ListNavigator') {
        //             iconName = 'list'
        //         }

        //         return <Icon name={iconName} size={25} color={focused ? 'red' : 'grey'} />
        //     },
        //     tabBarShowLabel: false,
        // })}
        >
            <Tab.Screen name="ListNavigator" component={ListNavigator} options={{ headerShown: false, tabBarStyle: { display: 'none' } }} />
        </Tab.Navigator >


    )
}

export default Navigasi;