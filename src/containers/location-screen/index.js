import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import Permissions from 'react-native-permissions'
import { Container, Description, ButtonsContainer, Gif } from './styles'
import Button from '../../components/button'
import { storagePrefix } from '../../helpers'

export default LocationScreen = props => {
    const [loading, setLoading] = useState(false)

    requestLocationPermission = async value => {
        if (value) await Permissions.request('location', { type: 'always' })

        await AsyncStorage.setItem(`${storagePrefix}checked_permission`, 'true')

        props.navigation.navigate('Map')
    }

    if (loading) return <View style={{ flex: 1 }} />

    return (
        <Container>
            <Gif
                source={{
                    uri:
                        'https://img.olhardigital.com.br/uploads/acervo_imagens/2019/03/r16x9/20190301101226_1200_675_-_google_maps.jpg'
                }}
            />
            <Description>
                Olá! Este app precisa da sua localização para encontrar lugares próximos a você.
            </Description>
            <Description>Deseja habilitar o acesso ao GPS agora?</Description>
            <ButtonsContainer>
                <Button onPress={() => requestLocationPermission(true)} text="Sim" />
                <Button onPress={() => requestLocationPermission(false)} text="Não" outline />
            </ButtonsContainer>
            <Description small>
                Se não quiser, pode fazer isso em um outro momento ou só escolher uma localização
                personalizada.
            </Description>
        </Container>
    )
}
