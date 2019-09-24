import React, { useState, useEffect } from 'react'
import { TouchableWithoutFeedback, TouchableOpacity, Animated, Platform } from 'react-native'
import { Container, ItemInfoContainer, Item, Label, Point, Icon } from './styles'
import Collapsible from 'react-native-collapsible'

//  Accordion feito com animação do próprio React Native
//  Para iOS foi utilizada a biblioteca react-native-collapsible'

export default Accordion = props => {
    const maxHeight = props.data.length * 60

    const [collapsed, setCollapsed] = useState(true)
    const [heightAnimation] = useState(new Animated.Value(0))

    useEffect(() => {
        if (Platform.OS === 'ios') return

        if (!collapsed) {
            Animated.timing(heightAnimation, {
                toValue: maxHeight,
                timing: 500
            }).start()
        } else {
            Animated.timing(heightAnimation, {
                toValue: 0,
                timing: 500
            }).start()
        }
    }, [collapsed])

    console.log('height', heightAnimation)

    return (
        <Container>
            <TouchableWithoutFeedback onPress={() => setCollapsed(!collapsed)}>
                <Item header>
                    <Label header>{props.title}</Label>
                    <Icon name={collapsed ? 'chevron-down' : 'chevron-up'} />
                </Item>
            </TouchableWithoutFeedback>
            <Animated.View style={{ height: heightAnimation }}>
                {Platform.OS === 'ios' ? (
                    <Collapsible collapsed={collapsed}>
                        {props.data.map((item, index) => (
                            <TouchableOpacity onPress={() => props.onItemPress(item)} key={index}>
                                <Item>
                                    <ItemInfoContainer>
                                        <Point color={item.color} />
                                        <Label>{item.name}</Label>
                                    </ItemInfoContainer>
                                    <Icon name="eye-outline" />
                                </Item>
                            </TouchableOpacity>
                        ))}
                    </Collapsible>
                ) : (
                    props.data.map((item, index) => (
                        <TouchableOpacity onPress={() => props.onItemPress(item)} key={index}>
                            <Item>
                                <ItemInfoContainer>
                                    <Point color={item.color} />
                                    <Label>{item.name}</Label>
                                </ItemInfoContainer>
                                <Icon name="eye-outline" />
                            </Item>
                        </TouchableOpacity>
                    ))
                )}
            </Animated.View>
        </Container>
    )
}
