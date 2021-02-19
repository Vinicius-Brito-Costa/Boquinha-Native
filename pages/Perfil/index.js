import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, ImageBackground, Dimensions, RadioButton } from 'react-native';
import imagemFundo from './../../assets/image/perfil/baloes-perfil.jpg';
import Menu from './../../components/menu.js';
const {height, width} = Dimensions.get('window');


export default function Perfil(props) {
    const { navigation } = props
    return (
        
        <ImageBackground source={imagemFundo} style={styles.imagem} >
            <Menu navigation={navigation} black={true} />
        <ScrollView>
            <View style={styles.containerPrincipal}>
                
                    <View style={styles.bloco}>
                        <Text style={styles.titleText}>
                            Este é o perfil da criança
                        </Text> 
                        <Text style={styles.text}>
                        Aqui nesta sessão é o espaço em que você, (pai, mãe ou responsável) irá registrar os dados da sua criança, assim mantém um registro completo que pode ser usado para monitoramento e também para mostra-los ao pediatra na proxima consulta para que ele possa avalia-los e acompanhar a evolução da criança.
                        </Text>
                        <Text style={styles.text}>
                        Para começar, preencha os campos abaixo. Com base nessas informações, será calculado o IMC da criança.
                        Após isso, irá aparecer o cadastro feito, contendo todas as informações registradas e o resultado do IMC.
                        </Text>

                            <Text style={styles.inputText}>Nome da criança:</Text>
                            <TextInput style={styles.input} placeholder={'Digite o nome'}  keyboardType='default' />

                            <Text style={styles.inputText}>Idade:</Text>
                            <TextInput style={styles.input} placeholder={'Digite a idade'}  keyboardType='numeric' />

                            <Text style={styles.inputText}>Peso:</Text>
                            <TextInput style={styles.input} placeholder={'Digite o peso'}  keyboardType='numeric' />

                            <Text style={styles.inputText}>Altura:</Text>
                            <TextInput style={styles.input} placeholder={'Digite a altura'}  keyboardType='numeric' />

                            <TouchableOpacity style={styles.botao}>
                                <Text style={styles.botaoTexto}>Enviar</Text>
                            </TouchableOpacity>
                   
                        
                       

                    </View>
                
            </View>
        </ScrollView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create ({
    containerPrincipal: {
        flex: 1,
        justifyContent: 'center', 
        alignContent: 'center',
        alignItems: 'center',
       
    },
    imagem: {
        height: height,
        alignItems: 'stretch',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center', 
        width: '100%'
    }, 
    titleText: {
        textAlign: 'center',
        fontSize: 22,
        marginBottom: 20,
        marginTop: 40
    },
    text: {
        textAlign: 'justify',
        fontSize: 17, 
        marginBottom: 20
    },
    bloco: {
        backgroundColor: 'rgba(255, 255, 255, .9)',
        width: '90%',
        borderRadius: 20,
        padding: 20,
        paddingBottom: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        marginBottom: 100,
        marginTop: 90, 
       
    }, 
    input: {
        marginTop: 5,
        marginBottom: 15,
        paddingLeft: 10,
        borderRadius: 3,
        width: '90%',
        height: 30,
        borderColor: '#00a6ff',
        borderWidth: 1,
    }, 
    inputText: {
        fontSize: 16
    },
    botao: {
        backgroundColor: '#00a6ff',
        height: 40,
        width: 100,
        borderRadius: 15
    }, 
    botaoTexto: {
        color: '#fff',
        textAlign: 'center', 
        paddingTop: 8,
        fontSize: 17
    }
})