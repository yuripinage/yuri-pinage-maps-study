import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import Permissions from 'react-native-permissions'
import { secondary } from '../../theme'
import { Container, FormContainer, Map, Scroll } from './styles'
import CustomInput from '../../components/custom-input'
import CustomModal from '../../components/custom-modal'
import Button from '../../components/button'
import Switch from '../../components/switch'

export default MapScreen = props => {
    const [myLocation, setMyLocation] = useState(false)
    const [loading, setLoading] = useState(false)
    const [gpsModal, setGpsModal] = useState(false)
    const [hasPermission, setHasPermission] = useState(false)
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [errors, setErrors] = useState({})
    const [position, setPosition] = useState({ lat: -21.8048843, long: -48.1758432 })

    useEffect(() => {
        handlePermission()
    }, [])

    const handlePermission = async () => {
        const status = await Permissions.check('location')
        setHasPermission(status === 'authorized')
    }

    const handleMyLocation = async value => {
        try {
            if (!value) {
                setMyLocation(value)
                return
            }

            if (!hasPermission) {
                setGpsModal(true)
                return
            }

            setMyLocation(true)
        } catch (err) {
            console.log('err', err)
        }
    }

    const isFormValid = () => {
        let err = {}

        if (!lat) err.lat = 'Campo obrigatório'
        else if (!Number(lat) && lat !== '0' && lat !== '-0') err.lat = 'Número inválido'

        if (!long) err.long = 'Campo obrigatório'
        else if (!Number(long) && long !== '0' && long !== '-0') err.long = 'Número inválido'

        setErrors(err)

        return JSON.stringify(err) === '{}'
    }

    const handleSubmit = () => {
        if (!isFormValid()) return
        setPosition({ lat, long })
    }

    return (
        <Container>
            <CustomModal
                visible={gpsModal}
                leftText="Sim"
                onLeftPress={() => props.navigation.navigate('Location')}
                rightText="Não"
                onRightPress={() => setGpsModal(false)}
                description="Você ainda não habilitou o acesso ao GPS. Deseja fazer isso agora?"
            />
            <CustomModal visible={loading}>
                <ActivityIndicator size={40} color={secondary} />
            </CustomModal>
            <Map
                region={{
                    latitude: Number(position.lat),
                    longitude: Number(position.long),
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            ></Map>
            <Scroll>
                <FormContainer>
                    <Switch
                        text="Usar localização atual"
                        value={myLocation}
                        onValueChange={() => handleMyLocation(!myLocation)}
                    />
                    {!myLocation && (
                        <FormContainer>
                            <CustomInput
                                text="Latitude"
                                value={lat}
                                onChangeText={text => setLat(text)}
                                keyboardType="number-pad"
                                errorMsg={errors.lat}
                            />
                            <CustomInput
                                text="Longitude"
                                value={long}
                                onChangeText={text => setLong(text)}
                                keyboardType="number-pad"
                                errorMsg={errors.long}
                            />
                            <Button text="Enviar" onPress={handleSubmit} />
                        </FormContainer>
                    )}
                </FormContainer>
            </Scroll>
        </Container>
    )
}
