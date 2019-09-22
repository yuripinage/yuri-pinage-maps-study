import React from 'react'
import { Switch } from 'react-native'
import { Container, Label } from './styles'
import { primary } from '../../theme'

export default FilterScreen = props => {
    return (
        <Container>
            <Label>{props.text}</Label>
            <Switch
                thumbColor="#e1e1e1"
                onValueChange={props.onValueChange}
                value={props.value}
                trackColor={{ false: '#d6d6d6', true: primary }}
            />
        </Container>
    )
}
