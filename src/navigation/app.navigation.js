import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react'
import MapScreen from '../containers/map-screen/map-screen'

const MapStack = createStackNavigator(
    {
        MapScreen: MapScreen
    },
    {
        initialRouteName: 'MapScreen',
        defaultNavigationOptions: props => defaultOptions(props)
    }
)

const AppNavigator = ({ initialRouteName }) => {
    const App = createAppContainer(
        createSwitchNavigator(
            {
                Map: MapStack
            },
            {
                initialRouteName: initialRouteName
            }
        )
    )
    return <App />
}

const defaultOptions = props => {
    return {
        header: null
    }
}

export default AppNavigator
