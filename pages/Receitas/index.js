import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, Text} from 'react-native';
import BG from './../../assets/image/receitas/fundoSalada.jpg';

const {height, width} = Dimensions.get('window')
export default function Receitas(props){
    return <View style={styles.container}>
                <ImageBackground source={BG} style={styles.imagemCriancas}>
                    <View style={styles.imagemCriancasOverlay}>
                        <View style={{width: '80%'}}>
                            <Text style={styles.containerTextMainTitulo}>Receitas Maravilhosas</Text>
                            <Text style={styles.containerTextMain}>Com ingredientes saudáveis, de baixo custo e nutritivos para os pequenos, aproveitando todo seu potêncial alimentício.</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f6abc9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagemCriancas:{
        height: height + 40,
        alignItems: 'stretch'
    },
    imagemCriancasOverlay:{
        width: '100%', 
        height: '100%', 
        backgroundColor: 'rgba(255, 255, 255, .8)', 
        justifyContent: 'center', 
        alignContent: 'center', 
        alignItems: 'center'
    },
    containerText:{
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        padding: 5,
        width: '80%'
    },
    containerTextList:{
        textAlign: 'left',
        marginLeft: 20,
        marginVertical: 10
    },
    containerTextMain:{
        textAlign: 'center',
        fontSize: 20,
        color: 'black',
        padding: 5,
    },
    containerTextMainTitulo:{
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: 'black',
        padding: 5,
        marginBottom: 40
    },
    containerTextTitulo:{
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        padding: 5,
        marginBottom: 40
    },
})