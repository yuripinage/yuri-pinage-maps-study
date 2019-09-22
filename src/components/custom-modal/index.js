import React, { useState } from 'react'
import { Modal } from 'react-native'
import { Container, ContentContainer, ButtonsContainer, Description } from './styles'
import Button from '../button'

export default CustomModal = props => {
    return (
        <Modal animationType="fade" visible={props.visible} transparent>
            <Container>
                <ContentContainer>
                    {props.children || <Description>{props.description}</Description>}
                    {props.leftText && props.rightText && (
                        <ButtonsContainer>
                            <Button onPress={props.onLeftPress} text={props.leftText} />
                            <Button onPress={props.onRightPress} text={props.rightText} outline />
                        </ButtonsContainer>
                    )}
                </ContentContainer>
            </Container>
        </Modal>
    )
}
