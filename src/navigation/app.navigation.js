import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react'
import MapScreen from '../containers/map-screen'
import LocationScreen from '../containers/location-screen'

const MapStack = createStackNavigator(
    {
        MapScreen: MapScreen
    },
    {
        initialRouteName: 'MapScreen',
        defaultNavigationOptions: props => defaultOptions(props)
    }
)

const LocationStack = createStackNavigator(
    {
        LocationScreen: LocationScreen
    },
    {
        initialRouteName: 'LocationScreen',
        defaultNavigationOptions: props => defaultOptions(props)
    }
)

const AppNavigator = ({ initialRouteName }) => {
    const App = createAppContainer(
        createSwitchNavigator(
            {
                Map: MapStack,
                Location: LocationScreen
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
