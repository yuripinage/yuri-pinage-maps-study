import React, { useState } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { Container, LabelContainer, Label, ErrorMessage, Input } from './styles'

export default CustomInput = props => {
    const [focus, setFocus] = useState(false)
    let focused = focus || props.value
    let _input

    return (
        <TouchableWithoutFeedback onPress={() => _input.focus()}>
            <Container errorMsg={props.errorMsg}>
                <LabelContainer focused={focused}>
                    <Label focused={focused}>{props.text}</Label>
                    <ErrorMessage focused={focused}>{props.errorMsg && `(${props.errorMsg})`}</ErrorMessage>
                </LabelContainer>
                <Input
                    ref={i => (_input = i)}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    keyboardType={props.keyboardType}
                />
            </Container>
        </TouchableWithoutFeedback>
    )
}
