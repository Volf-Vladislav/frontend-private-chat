import React from 'react'
// import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'

// const Stack = createStackNavigator()

import Filter from './pages/filter/Filter'
import Chat from './pages/chat/Chat'

import { COLORS } from './templates/styles/colors';

// const MyTheme = {
//     ...DefaultTheme,
//     colors: {
//         ...DefaultTheme.colors,
//         background: COLORS.background
//     },
// }

function Navigation() {
    return (
        // <NavigationContainer theme={MyTheme}>
        //     <Stack.Navigator>
        //         <Stack.Screen
        //             name="filter"
        //             component={Filter}
        //             options={{ headerShown: false }}
        //         />

        //         <Stack.Screen
        //             name="chat"
        //             component={Chat}
        //             options={{ headerShown: false }}
        //         />
        //     </Stack.Navigator>
        // </NavigationContainer>

        <Chat/>
    )
}

export default Navigation