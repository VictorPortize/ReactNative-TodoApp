import React, { useState } from 'react'
import { Container, Title, } from './styles'
import prompt from 'react-native-prompt-android';
import useTodo from '../../Context/Todo'

//Components
import { FlatList } from 'react-native'
import TodoItem from '../../Components/TodoItem'
import Header from '../../Components/Header'
import EmptyList from '../../Components/EmptyList'

const TodoList : React.FC = () => {

    const { todos, addTodo } = useTodo()

    function addNewTodo(Todo : String){
        addTodo({
            title : Todo,
            list : []
        })
    }

    function openPrompt(){
        prompt(
            'Novo To Do',
            'Digite o título do novo To Do',
            [
             {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
             {text: 'Adicionar', onPress: ( text ) => addNewTodo(text) },
            ],
            {
                cancelable: false,
                placeholder: 'Título: '
            }
        );
    }

    return (
        <Container>
            <Header title='To-do App' onPress={ openPrompt } />
            <Title>Listagem de To-Do's:</Title>
            <FlatList
                ListEmptyComponent={<EmptyList/>}
                renderItem={({ item, index }) => <TodoItem titulo={ item.title } list={item.list} index={ index } />}
                data={ todos }
                keyExtractor={( item, index ) => String(index)}
            />
        </Container>
    )
}

export default TodoList