import styled from 'styled-components/native'
import { dark, gray } from '../../theme'

export const Container = styled.View`
    width: 100%;
    height: 60px;
    justify-content: flex-start;
    border-bottom-width: 1;
    border-color: gray;
    padding-horizontal: 20;
    margin-bottom: 20;
`

export const Label = styled.Text`
    font-size: 8px;
    color: ${gray};
    text-transform: uppercase;
`

export const Input = styled.TextInput`
    font-size: 14px;
    color: ${dark};
`
