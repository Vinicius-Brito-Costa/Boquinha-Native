import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Index1 from './../../assets/image/index/index1.jpg'
import Index2 from './../../assets/image/index/index2.jpg'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
const Input = ({texto, senha, tipoTeclado='default'}) =>{
    return <TextInput style={styles.input} placeholder={texto} secureTextEntry={senha} keyboardType={tipoTeclado} />
}
const { height, width } = Dimensions.get('window')
export default function Home(props) {
    const {navigation} = props;
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <ImageBackground source={Index1} style={styles.bloco1}>
                <View style={styles.containerMain} >
                    <Text style={styles.containerTextMain} >Assim como os primeiros passos, as primeiras colheradas são decisivas para o futuro da criança.</Text>
                </View>
            </ImageBackground>
            <Text style={styles.frase1}>Entenda como a obesidade e sobrepeso infantil
            podem influenciar na vida dos pequenos.</Text>
            <View style={styles.containerMain2}>
                <Text style={styles.containerTextMain}>São 2,4 milhões de crianças com sobrepeso, 1,2 milhão com obesidade e outras 755 mil com obesidade grave.¹</Text>
            </View>
            <View style={styles.containerMain1}>
                <Text style={styles.containerTextMain}>Uma má alimentação na fase infantil influencia diretamente na sua saúde podendo ocasionar: Obesidade na vida adulta, desenvolvimento precoce de hipertensão, diabetes tipo 2, doença hepática gordurosa não alcóolica, asma dentre outras.²</Text>
            </View>
            <View style={styles.containerMain3}>
                <Text style={styles.containerTextMain}>Além disso, existem os riscos de cunho social e emocional, já que a obesidade pode desencadear quadros de doenças mentais ou problemas de relacionamento, incluindo: bullying, baixa autoestima,interferência na frequência escolar, empregabilidade e salários na vida adulta.²</Text>
            </View>
            <ImageBackground source={Index2} style={styles.bloco1}>
                <View style={styles.containerMain4}>
                    <Text style={styles.containerTextTitulo}>Objetivo</Text>
                    <Text style={styles.containerTextObjetivo}>Acreditamos que a prática de uma boa alimentação desde o nascimento é determinante para uma vida mais saudável. O objetivo do projeto é ser um facilitador para os responsáveis das crianças, fornecendo um leque de receitas nutritivas e de baixo custo que ajudam no combate a obesidade infantil.</Text>
                </View>
            </ImageBackground>



            <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginTexto}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Obesidade')}>
                <Text style={styles.loginTexto}>Obesidade</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.loginTexto}>Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Receitas')}>
                <Text style={styles.loginTexto}>Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.login} onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.loginTexto}>Cadastre-se</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    containerMain: {
        width: '90%',
        height: '30%',
        borderRadius: 30,
        padding: 10,
        backgroundColor: 'rgba(255, 148, 82, .7)',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    containerMain1: {
        width: '90%',
        borderRadius: 30,
        padding: 10,
        backgroundColor: 'rgb(255, 148, 82)',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
    },
    containerMain2: {
        width: '90%',
        borderRadius: 30,
        padding: 10,
        backgroundColor: '#77d353',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    containerMain3: {
        width: '90%',
        borderRadius: 30,
        padding: 10,
        backgroundColor: '#00a6ff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    containerMain4: {
        width: '90%',
        borderRadius: 30,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, .6)',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10
    },
    containerTextMain:{
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        padding: 5,
    },
    containerTextObjetivo:{
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        padding: 5,
    },
    containerTextTitulo:{
        textAlign: 'center',
        fontSize: 30,
        color: 'black',
        padding: 5,
        marginBottom: 40
    },
    bloco1:{
        height: height,
        alignItems: 'stretch',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo:{
        paddingTop: 30,
        fontSize: 30,
        color: '#fa7a53',
    },
    frase1:{
        fontSize: 24,
        color: 'black',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 60,
        width: '90%'
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
