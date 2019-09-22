import styled from 'styled-components/native'
import { dark, gray } from '../../theme'

export const Container = styled.View`
    width: 100%;
    height: 60px;
    justify-content: flex-start;
    border-bottom-width: 1;
    border-color: ${props => (props.errorMsg ? 'red' : gray)};
    margin-bottom: 20;
    padding-left: 20;
`

export const LabelContainer = styled.View`
    flex-direction: row;
    margin-top: ${props => (props.focused ? 0 : 10)};
`

export const Label = styled.Text`
    font-size: ${props => (props.focused ? 8 : 14)};
    color: ${props => (props.errorMsg ? 'red' : gray)};
    text-transform: uppercase;
`

export const Input = styled.TextInput`
    font-size: 14px;
    color: ${dark};
    margin-top: ${props => (props.focused ? 0 : -10)};
`

export const ErrorMessage = styled.Text`
    font-size: ${props => (props.focused ? 8 : 14)};
    color: red;
    margin-left: 10;
`
