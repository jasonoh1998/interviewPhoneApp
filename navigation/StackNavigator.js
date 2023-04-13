import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainPage from '../pages/MainPage';
import CoursePage from '../pages/CoursePage';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="CoursePage" component={CoursePage}/>
        </Stack.Navigator>
    );
};

export default StackNavigator;