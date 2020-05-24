import React, { useRef, useEffect } from 'react'
import { ContainerTodo, Title, Icon, Container, ContainerDelete, Ico, inputDistance, outputDistance, ContainerAnimation } from './styles'
import { useNavigation } from '@react-navigation/native'
import { PanGestureHandler, PanGestureHandlerGestureEvent, PanGestureHandlerStateChangeEvent, State } from 'react-native-gesture-handler'

import useTodo from '../../Context/Todo'
import { Animated } from 'react-native'

interface TodoItem {}

interface Props {
    titulo : String
    list : Array<TodoItem>
    index : number
}

const TodoItem : React.FC<Props> = ({ titulo, index }) => {

    const translateX = useRef( new Animated.Value(0) ).current
    const navigation = useNavigation()
    const { deleteTodo } = useTodo()

    function callDetailScreen(){
        navigation.navigate('ItemDetails',{ titulo , index })
    }

    function onDeleteTodo(){
        translateX.setOffset(0)
        translateX.setValue(0)
        deleteTodo(index)
    }

    function onGestureEvent( { nativeEvent : { translationX }  } : PanGestureHandlerGestureEvent){
        translateX.setValue(translationX)
    }

    function onHandlerStateChange( { nativeEvent : { state, oldState, translationX } } : PanGestureHandlerStateChangeEvent){
        if( oldState == State.ACTIVE){
            let full = false;
            let offset = translationX
            if ( translationX <= ( inputDistance / 2 ) ){
                full = true
            }else{
                translateX.setOffset(0);
                translateX.setValue(offset);
                offset = 0;
            }

            Animated.timing(translateX, {
                toValue: full ? inputDistance : 0,
                duration: 200,
                useNativeDriver: true,
              }).start(() => {
                offset = full ? inputDistance : 0;
                translateX.setOffset(offset);
                translateX.setValue(0);
              });
        }
    }

    return(
        <Container>
            <PanGestureHandler onGestureEvent={ onGestureEvent } onHandlerStateChange={ onHandlerStateChange } >
                <ContainerAnimation style={{ 
                        transform : [{
                            translateX : translateX.interpolate({
                                inputRange : [ inputDistance, 0],
                                outputRange : [ outputDistance, 0 ],
                                extrapolate : 'clamp'
                            })  
                        }]
                    }} >
                    <ContainerTodo onPress={callDetailScreen} >
                        <Title interpolate={ translateX } >{titulo}</Title>
                        <Icon name='ios-arrow-forward' size={ 20 } />
                    </ContainerTodo>
                </ContainerAnimation>
            </PanGestureHandler>
            <ContainerDelete>
                <Ico name='delete' size={25} color='white' onPress={ onDeleteTodo } />
            </ContainerDelete>
        </Container>
    )
}

export default TodoItem