import styled from 'styled-components/native'
import { primary, light } from '../../theme'

export const Container = styled.TouchableOpacity`
    background-color: ${props => (props.outline ? 'transparent' : primary)};
    border-color: ${primary};
    border-width: 4;
    border-radius: 4;
    min-width: ${props => props.width || 100};
    padding: 10px;
    margin: 10px;
    justify-content: center;
    align-items: center;
`

export const Title = styled.Text`
    color: ${props => (props.outline ? primary : light)};
    font-size: 16px;
    text-align: center;
    text-t
`
