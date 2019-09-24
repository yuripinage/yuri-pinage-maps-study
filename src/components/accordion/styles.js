import styled from 'styled-components/native'
import { gray } from '../../theme'
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'
MaterialCommunityIcons.loadFont()

export const Container = styled.View`
    width: 100%;
    margin-top: -20;
    margin-bottom: 20;
`

export const Item = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-horizontal: 20;
    border-bottom-width: 1;
    border-color: ${gray};
`

export const Label = styled.Text`
    font-size: 14px;
    color: ${gray};
    text-transform: ${props => (props.header ? 'uppercase' : 'none')};
`

export const Point = styled.View`
    background-color: ${props => props.color || gray};
    height: 10;
    width: 10;
    margin-right: 20;
    border-radius: 5;
`

export const Icon = styled(MaterialCommunityIcons)`
    font-size: 16px;
    color: ${gray};
`

export const ItemInfoContainer = styled.View`
    max-width: 80%;
    flex-direction: row;
    align-items: center;
`
