import MapView from 'react-native-maps'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const MapScreen = props => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: 37,
                    longitude: -122,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121
                }}
            ></MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        width: 200,
        height: 200,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
})

export default MapScreen
