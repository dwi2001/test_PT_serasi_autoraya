
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListMovie from '../scene/ListMovie';
import DetailMovie from '../scene/DetailMovie';


const stack = createStackNavigator();

const ListNavigator = (props) => {

    return (
        <stack.Navigator>
            <stack.Screen name='listMovie' component={ListMovie} options={{ headerShown: false }} />
            <stack.Screen name='DetailMovie' component={DetailMovie} options={{ headerShown: true, title: ' Detail Movie' }} />

        </stack.Navigator>

    )
}

export default ListNavigator;