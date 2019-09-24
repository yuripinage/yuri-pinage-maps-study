//
//  Yuri pinagé
//  yuripinage@gmail.com
//  +55 85 99950 6356
//
//  Ao acessar o app pela primeira vez o usuário será questionado se deseja permitir o acesso ao GPS pela aplicação.
//
//  Após isso ele irá para uma tela que contém um mapa do Google Maps, no qual ele pode digitar uma latitude e longitud.
//  Quando apertar em ENVIAR o mapa será atualizado para aquela nova locação.
//
//  Há também a opção do usuário usar sua localização atual.
//  Se ainda não tiver permitido o acesso ao GPS, um modal irá aparecer fornecendo instruções.
//
//  Quando o mapa é atualizado para o local do GPS, é carregada uma lista do Google Places de 20 locais mais próximos.
//  Esses locais são exibidos tanto no mapa quanto em uma listagem em ordem alfabética.
//

import React, { useState, useEffect } from 'react'
import { StatusBar } from 'react-native'
import AppNavigator from './src/navigation/app.navigation'
import AsyncStorage from '@react-native-community/async-storage'
import { storagePrefix } from './src/helpers'

//  O app faz uma checagem para saber se o usuário já passou pela tela de boas-vindas.
//  Caso já tenha, ele é direcionado automaticamente para a tela do Maps.

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
            const checkedPermission = await AsyncStorage.getItem(`${storagePrefix}checked_permission`)

            if (!checkedPermission) {
                setInitialRoute('Location')
                return
            }

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
