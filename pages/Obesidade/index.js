import React from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, Dimensions, ScrollView } from 'react-native';
import Criancas from './../../assets/image/obesidade/obinf.png';
import Prescricao from './../../assets/image/obesidade/prescricao.png';
import Tristeza from './../../assets/image/obesidade/tristeza.png';
import Comida from './../../assets/image/obesidade/boaalimentacao.png';
import Doutora from './../../assets/image/obesidade/doctor.png';

const {height, width} = Dimensions.get('window');
export default function Obesidade () {

    return(
        <ScrollView>
           <View style={styles.container}>
            <ImageBackground source={Criancas} style={styles.imagemCriancas}>
                <View style={styles.imagemCriancasOverlay}>
                    <View style={{width: '80%'}}>
                        <Text style={styles.containerTextMainTitulo}>O que é a obesidade infantil?</Text>
                        <Text style={styles.containerTextMain}>A obesidade infantil é uma doença multifatorial caracterizada pelo excesso de gordura corporal, que interfere na expectativa e qualidade de vida do indivíduo. Pode ser causada por fatores nutricionais, genéticos, psicossociais, culturais, entre outros. Está associada a riscos de desenvolver doenças crônicas não transmissíveis, tais como diabetes, hipertensão arterial e doenças cardiovasculares.</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.containerVerde}>
                <Image source={Prescricao} style={styles.containerImagens}/>
                <Text style={styles.containerTextTitulo}>As consequências</Text>
                <Text style={styles.containerText}>Entre os riscos da obesidade infantil, de curto e longo prazo, podemos citar:</Text>
                <Text style={[styles.containerText, styles.containerTextList]}>° Doenças e complicações cardiovasculares, endócrinas, ortopédicas musculoesqueléticas, dermatológicas e neurológicas.</Text>
                <Text style={[styles.containerText, styles.containerTextList]}>° Obesidade na vida adulta, desenvolvimento precoce de hipertensão, diabetes tipo 2, doença hepática gordurosa não alcoólica, asma entre outros.</Text>
            </View>
            <View style={styles.containerAzul}>
                <Image source={Tristeza} style={styles.containerImagens}/>
                <Text style={styles.containerText}>Além disso, existem os riscos de cunho social e emocional, já que a obesidade pode desencadear quadros de doenças mentais ou problemas de relacionamento, incluindo:</Text>
                <Text style={[styles.containerText, styles.containerTextList]}>° Bullying, baixa autoestima, interferência na frequência escolar, empregabilidade e salários na vida adulta.</Text>
                <Text style={[styles.containerText, styles.containerTextList]}>° Excesso de custos em saúde por toda vida.</Text>
                <Text style={[styles.containerText, styles.containerTextList]}>° Falta de qualidade de vida.</Text>
            </View>
            <View style={styles.containerLaranja}>
                <Image source={Comida} style={styles.containerImagens}/>
                <Text style={styles.containerTextTitulo}>Como previnir</Text>
                <Text style={styles.containerText}>Uma reeducação alimentar para toda a família pode ser o primeiro — e mais importante — passo para o combate à obesidade infantil. Estar comprometido com a saúde e deixar de lado os alimentos ricos em gorduras e açúcares é fundamental para que todos consigam manter a nova rotina de uma alimentação saudável a longo prazo.</Text>
                <Text style={styles.containerText}>Escolha versões integrais dos cereais e farinhas, como massas, arroz e pães. Aumente o consumo de verduras e legumes, e corte do cardápio os alimentos ultraprocessados, redes de fast food e os refrigerantes.</Text>
            </View>
            <View style={styles.containerVermelho}>
                <Image source={Doutora} style={styles.containerImagens}/>
                <Text style={styles.containerText}>Consulte, também, um nutricionista. Ele é o profissional adequado para orientá-los em relação à nova dieta, para que sejam consumidos os alimentos e nutrientes em sua proporção ideal.</Text>
                <Text style={styles.containerText}>Além de uma alimentação saudável, ter uma boa amamentação na fase inicial, praticar atividades físicas, ter controle do tempo de exposição às telas e uma boa noite de sono contribuem para a prevenção da obesidade infantil.</Text>
            </View>
        </View> 
        </ScrollView>
        
    );
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
    containerVerde:{
        alignItems: 'center',
        backgroundColor: '#77d353',
        paddingVertical: 20,
    },
    containerAzul:{
        alignItems: 'center',
        backgroundColor: '#00a6ff',
        paddingVertical: 20,
    },
    containerLaranja:{
        alignItems: 'center',
        backgroundColor: '#ff9052',
        paddingVertical: 20,
    },
    containerVermelho:{
        alignItems: 'center',
        backgroundColor: '#f95f62',
        paddingVertical: 20,
    },
    containerImagens:{
        alignSelf: 'center',
        resizeMode: 'contain',
        width: '60%',
        height: 200,
        marginBottom: 20
    }
})