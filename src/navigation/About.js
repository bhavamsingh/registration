import React from 'react';
 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../../src/screens/Home'
import Profile from '../screens/Profile';


const Stack = createNativeStackNavigator();

const About = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" headers>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'Home', //Set Header Title
                        headerMode: 'none',
                        headerStyle: {
                            backgroundColor: '#373e5a', //Set Header color
                        },
                        headerTintColor: '#fff', //Set Header text color
                        headerTitleStyle: {
                            fontWeight: 'bold',headerTitleAlign: 'center' //Set Header text style
                        },
                    }}
                />
                <Stack.Screen name='Profile' component={Profile}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default About;