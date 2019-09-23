import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import Permissions from 'react-native-permissions'
import RNGooglePlaces from 'react-native-google-places'
import { Marker } from 'react-native-maps'
import { primary, secondary } from '../../theme'
import { getGeolocation, colors } from '../../helpers'
import { Container, FormContainer, Map, Scroll, PlaceModalContainer } from './styles'
import CustomInput from '../../components/custom-input'
import CustomModal from '../../components/custom-modal'
import Button from '../../components/button'
import CustomSwitch from '../../components/custom-switch'
import Accordeon from '../../components/accordeon'
import PlaceItem from '../../components/place-item'

export default MapScreen = props => {
    const [myLocation, setMyLocation] = useState(false)
    const [places, setPlaces] = useState([])
    const [currentPlace, setCurrentPlace] = useState(null)
    const [loading, setLoading] = useState(false)
    const [gpsModal, setGpsModal] = useState(false)
    const [placeModal, setPlaceModal] = useState(false)
    const [hasPermission, setHasPermission] = useState(false)
    const [lat, setLat] = useState('-21.8048843')
    const [long, setLong] = useState('-48.1758432')
    const [errors, setErrors] = useState({})
    const [position, setPosition] = useState({ lat: -21.8048843, long: -48.1758432 })

    useEffect(() => {
        handlePermission()
    }, [])

    //  Ao clicar em um lugar pelo mapa ou pela listagem um modal com as informações dele é exibido
    useEffect(() => {
        if (currentPlace) setPlaceModal(true)
    }, [currentPlace])

    //  Checagem de acesso ao GPS
    const handlePermission = async () => {
        const status = await Permissions.check('location')
        setHasPermission(status === 'authorized')
    }

    //  Caso o app tenha acesso ao GPS é carregada uma lista de lugares próximos em ordem alfabética e recebem uma cor própria para ajudar na visualização
    //  Caso ele tente usar a posição do usuário, mas não tenha acesso ao GPS, aparecerá um modal com instruções
    //  Esse fluxo só funcionará em Android, pois o iOS permite que o app peça permissões apenas uma vez
    //  O fluxo no iOS será consertado em breve
    const handleMyLocation = async value => {
        try {
            if (!value) {
                setMyLocation(value)
                setPlaces([])
                return
            }

            if (!hasPermission) {
                setGpsModal(true)
                return
            }

            setLoading(true)
            setMyLocation(true)

            const { latitude, longitude } = await getGeolocation()
            setPosition({ lat: latitude, long: longitude })

            const results = await RNGooglePlaces.getCurrentPlace(['placeID', 'location', 'name', 'address'])
            let colorsArray = colors
            setPlaces(
                results
                    .map(item => {
                        const index = Math.floor(Math.random() * colorsArray.length)
                        item.color = colorsArray[index]
                        colorsArray = colorsArray.filter(e => e !== colorsArray[index])
                        return item
                    })
                    .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
            )

            setLoading(false)
        } catch (err) {
            console.log('err', err)
            setLoading(false)
        }
    }

    //  Envio do formulário
    const handleSubmit = () => {
        if (!isFormValid()) return
        setPosition({ lat, long })
    }

    //  Checa se as informações de latitude e longitude do formulário são válidas
    //  Apesar de latitude poder ser até 90, o maps só aceita até 85 para exibir o marcador
    const isFormValid = () => {
        let err = {}

        if (!lat) err.lat = 'Campo obrigatório'
        else if (!Number(lat) && lat !== '0' && lat !== '-0') err.lat = 'Número inválido'
        else if (Number(lat) < -85) err.lat = 'Valor mínimo é -85'
        else if (Number(lat) > 85) err.lat = 'Valor máximo é 85'

        if (!long) err.long = 'Campo obrigatório'
        else if (!Number(long) && long !== '0' && long !== '-0') err.long = 'Número inválido'
        else if (Number(lat) < -180) err.lat = 'Valor mínimo é -180'
        else if (Number(lat) > 180) err.lat = 'Valor máximo é 180'

        setErrors(err)

        return JSON.stringify(err) === '{}'
    }

    return (
        <Container>
            <CustomModal visible={loading}>
                <ActivityIndicator size={40} color={secondary} />
            </CustomModal>

            <CustomModal
                visible={gpsModal}
                leftText="Sim"
                onLeftPress={() => props.navigation.navigate('Location')}
                rightText="Não"
                onRightPress={() => setGpsModal(false)}
                description="Você ainda não habilitou o acesso ao GPS. Deseja fazer isso agora?"
            />

            <CustomModal visible={placeModal} singleText="Fechar" onSinglePress={() => setPlaceModal(false)}>
                <PlaceModalContainer>
                    <PlaceItem label="Nome" description={currentPlace && currentPlace.name} />
                    <PlaceItem label="Endereço" description={currentPlace && currentPlace.address} />
                </PlaceModalContainer>
            </CustomModal>

            <Map
                region={{
                    latitude: Number(position.lat),
                    longitude: Number(position.long),
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01
                }}
            >
                <Marker
                    pinColor={primary}
                    coordinate={{ latitude: Number(position.lat), longitude: Number(position.long) }}
                />
                {places.map((item, index) => (
                    <Marker
                        key={index}
                        onPress={e => setCurrentPlace(item)}
                        pinColor={item.color}
                        opacity={0.4}
                        coordinate={{ latitude: item.location.latitude, longitude: item.location.longitude }}
                    />
                ))}
            </Map>

            <Scroll>
                <FormContainer>
                    <CustomSwitch
                        text="Usar localização atual"
                        value={myLocation}
                        onValueChange={() => handleMyLocation(!myLocation)}
                    />
                    {places.length > 0 && (
                        <Accordeon title="Lugares Próximos" data={places} onItemPress={setCurrentPlace} />
                    )}
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
