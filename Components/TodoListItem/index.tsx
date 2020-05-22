import React, { useState } from 'react'
import { Container, Title, Icone, ContainerIcon } from './styles'
import CheckBox from '@react-native-community/checkbox';

interface Props {
    titulo : String
    checked : boolean
    index : number
    onCheck : ( index : number ) => void
    onDelete : ( index : number ) => void
}

const TodoListItem : React.FC<Props> = ({ titulo, checked, onCheck, index, onDelete }) => {


    function deleteItem(){
        onDelete( index )
    }

    function toggleFinished(){
        onCheck( index )
    }

    return (
        <Container>
            <CheckBox value={ checked } onChange={ toggleFinished }  />
            <Title>{ titulo }</Title>
            <ContainerIcon onPress={ deleteItem } >
                <Icone color={'#28847e'} name='delete' size={ 24 } />
            </ContainerIcon>
        </Container>
    )
}

export default TodoListItem