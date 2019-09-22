import React from 'react'
import { Container, Label, Input } from './styles'

export default CustomInput = props => {
    return (
        <Container>
            <Label>{props.text}</Label>
            <Input />
        </Container>
    )
}
