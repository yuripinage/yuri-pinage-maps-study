import styled from 'styled-components/native'
import { gray } from '../../theme'

export const Container = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom-width: 1;
    border-color: ${gray};
    padding-horizontal: 20;
    margin-bottom: 20;
`

export const Label = styled.Text`
    font-size: 14px;
    color: ${gray};
    text-transform: uppercase;
`
