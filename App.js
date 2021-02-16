import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, PaginaInicial, Obesidade, Cadastro, Receitas, Sobre } from './pages'
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer initialRouteName='Pagina Inicial' headerMode='screen'>
            <Stack.Navigator>
            <Stack.Screen name='Receitas' component={Receitas} options={{title: 'Receitas', headerStyle:{backgroundColor: '#77d353'}, headerTintColor: 'white'}} />
                <Stack.Screen name='PaginaInicial' component={PaginaInicial} options={{title: 'Pagina Inicial', headerStyle:{backgroundColor: '#ff9052'}, headerTintColor: 'white'}} />
                <Stack.Screen name='Obesidade' component={Obesidade} options={{title: 'Obesidade', headerStyle:{backgroundColor: 'salmon'}, headerTintColor: 'white'}} />
                <Stack.Screen name='Login' component={Login} options={{title: 'Login', headerStyle:{backgroundColor: '#ff9052'}, headerTintColor: 'white'}} />
                <Stack.Screen name='Cadastro' component={Cadastro} options={{title: 'Cadastro', headerStyle:{backgroundColor: '#77d353'}, headerTintColor: 'white'}} />
                <Stack.Screen name='Sobre' component={Sobre} options={{title: 'Sobre', headerStyle:{backgroundColor: '#77d353'}, headerTintColor: 'white'}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}