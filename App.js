import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Login, PaginaInicial, Obesidade, Cadastro, Receitas, Sobre, Perfil } from './pages'
import { StyleSheet, View, Button } from 'react-native';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

export default function App(props) {
    const { navigation } = props
    return (
        <NavigationContainer initialRouteName='Home' headerMode='screen'>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={PaginaInicial} />
                <Drawer.Screen name='Perfil' component={Perfil} />
                <Drawer.Screen name='Receitas' component={Receitas} />
                <Drawer.Screen name='Obesidade' component={Obesidade} />
                <Drawer.Screen name='Login' component={Login} />
                <Drawer.Screen name='Cadastro' component={Cadastro} />
                <Drawer.Screen name='Sobre' component={Sobre} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
/* 
<Stack.Screen name='PaginaInicial' component={PaginaInicial} options={{title: 'Pagina Inicial', headerStyle:{backgroundColor: '#ff9052'}, headerTintColor: 'white'}} />
                <Stack.Screen name='Receitas' component={Receitas} options={{title: 'Receitas', headerStyle:{backgroundColor: '#77d353'}, headerTintColor: 'white'}} />
                <Stack.Screen name='Obesidade' component={Obesidade} options={{title: 'Obesidade', headerStyle:{backgroundColor: 'salmon'}, headerTintColor: 'white'}} />
                <Stack.Screen name='Login' component={Login} options={{title: 'Login', headerStyle:{backgroundColor: '#ff9052'}, headerTintColor: 'white'}} />
                <Stack.Screen name='Cadastro' component={Cadastro} options={{title: 'Cadastro', headerStyle:{backgroundColor: '#77d353'}, headerTintColor: 'white'}} />
                <Stack.Screen name='Sobre' component={Sobre} options={{title: 'Sobre', headerStyle:{backgroundColor: '#77d353'}, headerTintColor: 'white'}} />
                <Stack.Screen name='Perfil' component={Perfil} options={{title: 'Perfil', headerStyle:{backgroundColor: '#00a6ff'}, headerTintColor: 'white'}} />


*/