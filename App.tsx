import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'

//Pages
import TodoList from './Routes/TodoList'
import ItemDetails from './Routes/ItemDetails'

//Context 
import { TodoProvider } from './Context/Todo'

const Stack = createStackNavigator()

const NavigationOptions : StackNavigationOptions = {
  headerShown : false
}

const App : React.FC = () => {
  return (
    <>
    <NavigationContainer>
      <TodoProvider>
        <Stack.Navigator screenOptions={ NavigationOptions } >
          <Stack.Screen name='TodoList' component={TodoList}  />
          <Stack.Screen name='ItemDetails' component={ItemDetails} />
        </Stack.Navigator>
      </TodoProvider>
    </NavigationContainer>
    </>
  );
};

export default App;
