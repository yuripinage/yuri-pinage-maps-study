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
