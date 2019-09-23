import React from 'react'
import { Container, Label, Description } from './styles'

export default PlaceItem = props => {
    return (
        <Container>
            <Label>{props.label}</Label>
            <Description>{props.description}</Description>
        </Container>
    )
}
