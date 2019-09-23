import React, { useState, useEffect } from 'react'
import { TouchableWithoutFeedback, Animated } from 'react-native'
import { Container, Item, Label, Point, Icon } from './styles'

export default Accordeon = props => {
    const maxHeight = props.data.length * 60

    const [collapsed, setCollapsed] = useState(true)
    const [heightAnimation] = useState(new Animated.Value(0))

    useEffect(() => {
        if (!collapsed) {
            Animated.timing(heightAnimation, {
                toValue: maxHeight,
                timing: 200
            }).start()
        } else {
            Animated.timing(heightAnimation, {
                toValue: 0,
                timing: 100
            }).start()
        }
    }, [collapsed])

    return (
        <Container>
            <TouchableWithoutFeedback onPress={() => setCollapsed(!collapsed)}>
                <Item header>
                    <Label header>{props.title}</Label>
                    <Icon name="chevron-down" />
                </Item>
            </TouchableWithoutFeedback>
            <Animated.View style={{ height: heightAnimation }}>
                {props.data.map((item, index) => (
                    <TouchableWithoutFeedback onPress={() => props.onItemPress(item)} key={index}>
                        <Item>
                            <Point color={item.color} />
                            <Label>{item.name}</Label>
                            <Icon name="eye-outline" />
                        </Item>
                    </TouchableWithoutFeedback>
                ))}
            </Animated.View>
        </Container>
    )
}
