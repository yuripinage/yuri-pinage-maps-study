import styled from 'styled-components/native'
import MapView from 'react-native-maps'
import { light } from '../../theme'

export const Container = styled.View`
    background-color: ${light};
    flex: 1;
    align-items: center;
`

export const Map = styled(MapView)`
    height: 50%;
    width: 100%;
    margin-bottom: 20px;
`

export const Scroll = styled.ScrollView`
    width: 100%;
`

export const FormContainer = styled.View`
    align-items: center;
    width: 100%;
`
