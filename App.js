import React, { useState, useEffect } from 'react'
import { StatusBar, Text } from 'react-native'
import AppNavigator from './src/navigation/app.navigation'
import AsyncStorage from '@react-native-community/async-storage'
import { storagePrefix } from './src/helpers'

const App = props => {
    const [initialRoute, setInitialRoute] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        verifyAuthUser()
    }, [])

    useEffect(() => {
        if (!initialRoute) return
        setLoading(false)
    }, [initialRoute])

    const verifyAuthUser = async () => {
        try {
            // const checkedPermission = await AsyncStorage.getItem(`${storagePrefix}checked_permission`)

            // if (!checkedPermission) {
            //     setInitialRoute('Location')
            //     return
            // }

            setInitialRoute('Map')
        } catch (err) {
            console.log('err', err)
            setLoading(false)
        }
    }

    return (
        <>
            <StatusBar backgroundColor="black" />
            {!loading && <AppNavigator initialRouteName={initialRoute} />}
        </>
    )
}

export default App
