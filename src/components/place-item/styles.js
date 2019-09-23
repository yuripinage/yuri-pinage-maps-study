import styled from 'styled-components/native'
import { dark, gray } from '../../theme'

export const Container = styled.View`
    width: 100%;
    height: 40px;
    justify-content: flex-start;
    margin-bottom: 20;
    padding-horizontal: 20;
`

export const Label = styled.Text`
    font-size: 8px;
    color: ${gray};
    text-transform: uppercase;
    margin-bottom: 10;
`

export const Description = styled.Text`
    font-size: 14px;
    color: ${dark};
    margin-bottom: 10;
`
