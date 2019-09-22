import styled from 'styled-components/native'
import { light, dark } from '../../theme'

export const Container = styled.View`
    flex: 1;
    background-color: ${light};
    justify-content: center;
    align-items: center;
    padding: 20px;
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

export const Gif = styled.Image`
    height: 220px;
    width: 220px;
    border-radius: 110;
    margin: 10px;
`
