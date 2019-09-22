import styled from 'styled-components/native'
import { light, dark } from '../../theme'

export const Container = styled.View`
    flex: 1;
    background-color: #00000025;
    justify-content: center;
    align-items: center;
    padding: 20px;
`

export const ContentContainer = styled.View`
    min-width: 50%;
    min-height: 25%;
    padding: 20px;
    background-color: ${light};
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`

export const Description = styled.Text`
    color: ${dark};
    font-size: ${props => (props.small ? 12 : 16)};
    line-height: 21px;
    text-align: center;
    margin: 10px;
`

export const ButtonsContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
