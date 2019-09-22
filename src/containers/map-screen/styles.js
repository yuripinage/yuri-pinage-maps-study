import styled from 'styled-components/native'
import MapView from 'react-native-maps'
import { gray, light } from '../../theme'

export const Container = styled.View`
    flex: 1;
    background-color: ${light};
    align-items: center;
`

export const Map = styled(MapView)`
    height: 40%;
    width: 100%;
    margin-bottom: 20px;
`

export const FormContainer = styled.View`
    width: 100%;
    align-items: center;
`
