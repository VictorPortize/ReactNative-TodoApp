import React, { useState, useEffect, useContext, createContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage';

interface TodoItem {
    title : String
    finished : boolean
}

interface Todo {
    title : String
    list : Array<TodoItem>
}

interface TodoContextProps {
    todos : Array<Todo>
    addTodo : ( Todo : Todo ) => void
    deleteTodo : ( index : number ) => void 
    addTask : ( index : number, task : string) => void
    toggleTask : ( indexTodo : number, indexItem : number ) => void
    deleteTask : ( indexTodo : number, indexItem : number ) => void
}

const TodoContext = createContext( {} as TodoContextProps )

export const TodoProvider : React.FC = ({ children }) => {

    const [ todos, setTodos ] = useState<Array<Todo>>([])

    useEffect(() => {
        getTodos()
    },[])


    async function saveTodos( Todos : Array<Todo> ){
        setTodos(Todos)
        await AsyncStorage.setItem('ToDosApp',JSON.stringify(Todos))
    }

    async function getTodos(){
        let data = await AsyncStorage.getItem('ToDosApp')
        if( data ){
            let todos = JSON.parse(data)
            setTodos(todos)
        }
    }

    function addTodo( Todo : Todo ){
        let allTodos = [...todos, Todo]
        saveTodos(allTodos)
    }

    function deleteTodo( indexTodo : number ){
        let allTodos = [...todos]
        allTodos.splice(indexTodo)
        saveTodos(allTodos)
    }


    function addTask( index : number, task : String ){
        let allTodos = [...todos]
        allTodos[index].list.push({
            title : task,
            finished : false
        })
        saveTodos(allTodos)        
    }

    function toggleTask( indexTodo : number, indexItem : number ){
        let allTodos = [...todos]
        allTodos[indexTodo].list[indexItem]
        allTodos[indexTodo].list[indexItem].finished = !allTodos[indexTodo].list[indexItem].finished
        saveTodos(allTodos)
    }

    function deleteTask( indexTodo : number, indexItem : number ){
        let allTodos = [...todos]
        allTodos[indexTodo].list.splice(indexItem)
        saveTodos(allTodos)
    }

    return (
        <TodoContext.Provider value={{
            todos,
            addTodo,
            deleteTodo,
            addTask,
            toggleTask,
            deleteTask
        }}>
            {
                children
            }
        </TodoContext.Provider>
    )
}

export default function useTodo(){
    const context = useContext(TodoContext)
    return context
}