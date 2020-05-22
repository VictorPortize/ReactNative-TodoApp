import React from 'react'
import { Container, Title, Porcentagem, ContainerTitle } from './styles'
import { useRoute, RouteProp } from '@react-navigation/native'
import prompt from 'react-native-prompt-android';
import useTodo from '../../Context/Todo'

//Component
import TodoListItem from '../../Components/TodoListItem'
import { FlatList } from 'react-native'
import Header from '../../Components/Header'

type RouteParams = {
    ItemDetails : {
        titulo : String,
        index : number,
    }
}

type ProfileScreenRouteProp = RouteProp<RouteParams, 'ItemDetails'>;

const ItemDetails : React.FC = () => {

    const { todos, addTask, toggleTask, deleteTask } = useTodo()
    const { params : { titulo, index } } = useRoute<ProfileScreenRouteProp>()

    function addNewTask(Todo : string){
        addTask(index, Todo)
    }

    function onChangeFinished( indexItem : number){
        toggleTask( index, indexItem )
    }

    function onDeleteTask( indexItem : number){
        deleteTask( index, indexItem )
    }

    function openPrompt(){
        prompt(
            'Nova Tarefa',
            'Digite o título da nova Tarefa',
            [
             {text: 'Cancelar', onPress: () => {}, style: 'cancel'},
             {text: 'Adicionar', onPress: ( text ) => addNewTask(text) },
            ],
            {
                cancelable: false,
                placeholder: 'Título: '
            }
        );
    }

    function getReadyPercent() : String {
        if( todos[index].list.length == 0){
            return '100%'
        }else{
            let checkedTodos = todos[index].list.filter( item => item.finished)
            return `${Math.floor(( checkedTodos.length / todos[index].list.length ) * 100)}%`
        }
    }

    return (
        <Container>
            <Header title={'Detalhe do item'} onPress={ openPrompt }  />
            <ContainerTitle>
                <Title>{ titulo }</Title>
                <Porcentagem>{ getReadyPercent() } concluído</Porcentagem>
            </ContainerTitle>
            <FlatList 
                data={ todos[index].list }
                renderItem={({ item, index }) => (
                <TodoListItem
                    titulo={ item.title }
                    checked={ item.finished }
                    index={ index }
                    onDelete={ onDeleteTask }
                    onCheck={ onChangeFinished } />
                )}
                keyExtractor={( item, index ) => String(index)}
            />
        </Container>
    )
}

export default ItemDetails