import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const Input = ({texto, senha, tipoTeclado='default'}) =>{
    return <TextInput style={styles.input} placeholder={texto} secureTextEntry={senha} keyboardType={tipoTeclado} />
}
export default function Login() {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.containerMain}>
                <Text style={styles.titulo}>Entrar</Text>
                <Text style={styles.texto}>Entre para acessar a sua conta
                Ainda não possui uma?</Text>
                <Text style={styles.subTitulo}>Cadastre-se</Text>
                <Text style={styles.miniTitulo}>E-mail</Text>
                <Input texto='Digite o seu E-mail' tipoTeclado='email-address'/>
                <Text style={styles.miniTitulo}>Senha</Text>
                <Input texto='Digite o sua senha' senha={true} />
                <Text style={{fontSize: 10, width: '100%', textAlign: 'center'}}>Esqueceu sua senha? <Text style={{color: '#fa7a53'}}>Clique aqui</Text></Text>
                <TouchableOpacity style={styles.login}>
                    <Text style={styles.loginTexto}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6abc9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerMain: {
        width: '80%',
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo:{
        paddingTop: 30,
        fontSize: 30,
        color: '#fa7a53',
    },
    texto:{
        fontSize: 15,
        textAlign: 'center',
        width: '80%',
        paddingTop: 20
    },
    subTitulo:{
        fontSize: 18,
        color: '#fa7a53',
    },
    miniTitulo:{
        width: '80%',
        fontSize: 15,
        marginVertical: 10,
        textAlign: 'left'
    },
    input:{
        paddingLeft: 10,
        borderRadius: 3,
        width: '80%',
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#ced4da',
        borderTopWidth: 1,
        borderTopColor: '#ced4da',
        borderLeftWidth: 1,
        borderLeftColor: '#ced4da',
        borderRightWidth: 1,
        borderRightColor: '#ced4da',
    },
    login:{
        width: '50%',
        height: 40,
        backgroundColor: '#fa7a53',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 40
    },
    loginTexto:{
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        
    }
});
