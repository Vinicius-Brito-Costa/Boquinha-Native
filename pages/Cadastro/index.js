import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

const Input = ({texto, senha, tipoTeclado='default'}) =>{
    return <TextInput style={styles.input} placeholder={texto} secureTextEntry={senha} keyboardType={tipoTeclado} />
}
export default function Cadastro() {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <View style={styles.containerMain}>
                <Text style={styles.titulo}>Cadastre-se</Text>
                <Text style={styles.texto}>Crie sua conta agora preenchendo os campos abaixo
                Já possui uma conta? <Text style={styles.subTitulo}>Entre</Text></Text>
                
                <Text style={styles.miniTitulo}>E-mail</Text>
                <Input texto='Digite o seu E-mail' tipoTeclado='email-address'/>
                <Text style={styles.miniTitulo}>Senha</Text>
                <Input texto='Digite o sua senha' senha={true} />
                <Text style={styles.miniTitulo}>Confirme a senha</Text>
                <Input texto='Repita a senha' senha={true} onPress={() => Alert.alert('Cadastrado com sucesso.')}/>
                <TouchableOpacity style={styles.cadastro}>
                    <Text style={styles.cadastroTexto}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff9052',
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
        color: '#05bb51',
    },
    texto:{
        fontSize: 15,
        textAlign: 'center',
        width: '80%',
        paddingTop: 20
    },
    subTitulo:{
        color: '#05bb51',
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
    cadastro:{
        width: '50%',
        height: 40,
        backgroundColor: '#05bb51',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 40
    },
    cadastroTexto:{
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        
    }
});
