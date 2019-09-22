import React from 'react'
import { Container, Title } from './styles'

export default Button = props => {
    return (
        <Container onPress={props.onPress} outline={props.outline} width={props.width}>
            <Title outline={props.outline}>{props.text}</Title>
        </Container>
    )
}
