import React, { useState, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Container, FormContainer, Map } from './styles'
import Switch from '../../components/switch'
import CustomInput from '../../components/custom-input'

export default MapScreen = props => {
    const [myLocation, setMyLocation] = useState(false)

    return (
        <Container>
            <Map
                region={{
                    latitude: 37,
                    longitude: -122,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            ></Map>
            <FormContainer>
                <Switch
                    text="Usar localização atual"
                    value={myLocation}
                    onValueChange={() => setMyLocation(!myLocation)}
                />
                <CustomInput
                    text="Latitude"
                    value={myLocation}
                    onValueChange={() => setMyLocation(!myLocation)}
                />
                <CustomInput
                    text="Longitude"
                    value={myLocation}
                    onValueChange={() => setMyLocation(!myLocation)}
                />
            </FormContainer>
        </Container>
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
