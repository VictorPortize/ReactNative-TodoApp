import React from 'react'
import { Container, Title, Icon, Ico,  ContainerIcon } from './styles'
import { useNavigation } from '@react-navigation/native'
import useTodo from '../../Context/Todo'

interface TodoItem {}

interface Props {
    titulo : String
    list : Array<TodoItem>
    index : number
}

const TodoItem : React.FC<Props> = ({ titulo, index }) => {

    const navigation = useNavigation()
    const { deleteTodo } = useTodo()

    function callDetailScreen(){
        navigation.navigate('ItemDetails',{ titulo , index })
    }

    function onDeleteTodo(){
        deleteTodo(index)
    }

    return(
        <Container onPress={callDetailScreen} >
            <Title>{titulo}</Title>
            <ContainerIcon >
                <Ico onPress={ onDeleteTodo } color={'#28847e'} name='delete' size={ 24 } />
                <Icon name='ios-arrow-forward' size={ 20 } />
            </ContainerIcon>
        </Container>
    )
}

export default TodoItem