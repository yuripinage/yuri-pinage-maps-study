//  Arquivo com algumas funções e variáveis úteis para usar em partes diferentes do app

import Geolocation from '@react-native-community/geolocation'

export const storagePrefix = '@yuripinageinvillia:'

export const getGeolocation = () => {
    return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
            ({ coords }) => {
                const { latitude, longitude } = coords
                resolve({ latitude, longitude })
            },
            error => reject(error)
        )
    })
}

//  Inicialente seria gerada uma cor aletória, mas o Google Maps não aceita algumas cores, então elas tiveram quer inseridas manualmente
//  export const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`
export const colors = [
    '#8bf19e',
    '#8fd1cd',
    '#e8d1d7',
    '#77f318',
    '#4fbeb4',
    '#b21a16',
    '#4f0b1d',
    '#0a39b6',
    '#69eeba',
    '#a0104e',
    '#0b289d',
    '#0e4876',
    '#dc871a',
    '#1f810e',
    '#becd3b',
    '#a6a57b',
    '#26d23c',
    '#128bc7',
    '#c2358c',
    '#2541bb'
]
