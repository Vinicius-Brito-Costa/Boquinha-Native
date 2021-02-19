import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ImageBackground, Text, FlatList, TouchableOpacity, ScrollView, Dimensions, SafeAreaView } from 'react-native';
import Index1 from './../../assets/image/sobre/sobreImagem.jpg';
import IntegranteCosmo from './../../assets/image/sobre/integranteCosmo.jpg';
import IntegranteDiego from './../../assets/image/sobre/integranteDiego.jpg';
import IntegranteRafael from './../../assets/image/sobre/integranteRafael.jpg';
import IntegranteSamanta from './../../assets/image/sobre/integranteSamanta.jpg';
import IntegranteSara from './../../assets/image/sobre/integranteSara.jpg';
import IntegranteVinicius from './../../assets/image/sobre/integranteVinicius.jpg';
import ColaboradoresRecode from './../../assets/image/sobre/recode.png';
import ColaboradoresCren from './../../assets/image/sobre/Logo_do_CREN.png';
import ColaboradoresPastoral from './../../assets/image/sobre/logo-pastoral-da-crianca.png';
import ReadMore from 'react-native-read-more-text';
import Menu from './../../components/menu.js';

const { height, witdh } = Dimensions.get('window')

const _renderTruncatedFooter = (handlePress) => {
    return (
        <Text style={{ color: 'blue', marginTop: 5, textAlign: 'right' }} onPress={handlePress}>
            Saiba Mais
        </Text>
    );
}
const _renderRevealedFooter = (handlePress) => {
    return (
        <Text style={{ color: 'blue', marginTop: 5, textAlign: 'right' }} onPress={handlePress}>
            Reduzir
        </Text>
    );
}
const _handleTextReady = () => {
    // ...
}



const DADOS = [
    {
        nome: 'Cosmo Amaro',
        descricao: 'Estudante da Recode Pro. Entre em contato comigo clicando no botão',
        imagem: IntegranteCosmo,
    },

    {
        nome: 'Diego Carmo',
        descricao: 'Estudante da Recode Pro. Entre em contato comigo clicando no botão',
        imagem: IntegranteDiego,
    },

    {
        nome: 'Rafael Amaral',
        descricao: 'Estudante da Recode Pro. Entre em contato comigo clicando no botão',
        imagem: IntegranteRafael,
    },

    {
        nome: 'Samanta Antonio',
        descricao: 'Estudante da Recode Pro. Entre em contato comigo clicando no botão',
        imagem: IntegranteSamanta,
    },

    {
        nome: 'Sara Leal Lima',
        descricao: 'Estudante da Recode Pro. Entre em contato comigo clicando no botão',
        imagem: IntegranteSara,
    },

    {
        nome: 'Vinicius Brito',
        descricao: 'Estudante da Recode Pro. Entre em contato comigo clicando no botão',
        imagem: IntegranteVinicius,
    },

]

const DADOS2 = [
    {
        nome: 'RECODE PRO',
        imagem: ColaboradoresRecode,
        descricao: 'O Recode Pro tem como objetivos a formação e a empregabilidade de pessoas em situação de vulnerabilidade social como programadores full stack. Além do conteúdo técnico, são desenvolvidos temas como criatividade, comunicação e atuação profissional, em uma metodologia que se baseia na colaboração e na construção de projetos para a resolução de problemas sociais.',

    },

    {
        nome: 'CREN',
        imagem: ColaboradoresCren,
        descricao: 'O Cren é um centro de referência internacional na área de educação nutricional e no tratamento de distúrbios nutricionais primários (subnutrição e obesidade). É um lugar que comprova quanto bem um alguém é capaz quando suas pretensões não são excessivas e irreais, quando o objetivo não é o cumprimento de um plano delimitado, e sim favorecer a pessoa e ajudá-la em suas necessidades.',

    },

    {
        nome: 'Pastoral da Criança',
        imagem: ColaboradoresPastoral,
        descricao: 'A Pastoral da Criança, organismo de ação social da CNBB, alicerça sua atuação na organização da comunidade e na capacitação de líderes voluntários que ali vivem e assumem a tarefa de orientar e acompanhar as famílias vizinhas em ações básicas de saúde, educação, nutrição e cidadania tendo como objetivo o "desenvolvimento integral das crianças" promovendo em função delas.',

    },
]

function Membros1({ item }) {
    return <View style={styles.membroBox}>
        <View style={styles.membroBoxBG}>
            <Image source={item.imagem} style={styles.membros1Imagem} />
            <View style={styles.membroBoxText}>
                <Text style={styles.membroNome}>{item.nome}</Text>
                <Text style={styles.descricao1}>{item.descricao}</Text>
            </View>
            <TouchableOpacity style={styles.btnLinkedIn}>
                <Text style={{ textAlign: 'center', fontSize: 18 }}>LinkedIn</Text>
            </TouchableOpacity>
        </View>

    </View>
}

function Parceiros({ item }) {
    return <View style={styles.parceirosBox}>
        <View style={styles.parceirosBoxBG}>
            <Image source={item.imagem} style={styles.parceirosImagem} />
            <View style={styles.parceirosBoxText}>
                <Text style={styles.parceirosNome}>{item.nome}</Text>
                <Text style={styles.descricao2}>{item.descricao}</Text>
            </View>
            <TouchableOpacity style={styles.btnParceiros}>
                <Text style={{ textAlign: 'center', fontSize: 18 }}>Acesse o site</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default function Sobre(props) {
    const { navigation } = props
    return <ScrollView>
            <View style={styles.container}>
                
                <StatusBar hidden />
                <ImageBackground source={Index1} style={styles.bloco1}>
                <Menu navigation={navigation} />
                    <View style={styles.containerMain} >
                        <Text style={styles.containerTitulo} >Sobre o Projeto Boquinha</Text>
                    </View>
                </ImageBackground>

                <View style={styles.blocos}>
                    <ReadMore numberOfLines={3} renderTruncatedFooter={_renderTruncatedFooter} renderRevealedFooter={_renderRevealedFooter} onReady={_handleTextReady}>
                        <Text style={styles.frase1}>O projeto boquinha surgiu por meio de um dos programas da Recode, que visa gerar oportunidades e estimular a transformação social e o empoderamento digital.
                        A Recode Pro possibilitou além do desenvolvimento tecnológico, um olhar crítico diante das questões sociais, as quais muitas vezes fazem parte do nosso cotidiano de forma direta.
                Acreditamos que uma boa alimentação é um dos grandes fatores para uma vida saudável, logo, o objetivo do nosso projeto é ser um site informativo e instrutivo para famílias de baixa renda que possuem crianças, fornecendo um leque de receitas nutritivas e de baixo custo que ajudam no combate a obesidade infantil.</Text>
                    </ReadMore>
                </View>

                <View style={styles.containerMain2}>
                    <Text style={styles.containerTitulo2} >Conheça os integrantes do projeto</Text>
                    <Text style={styles.frase2}>Membros do Squad 6 de São Paulo, responsáveis por idealizar e desenvolver o Boquinha</Text>
                </View>

                <SafeAreaView style={{flex: 1}}>
                    <FlatList
                        data={DADOS}
                        renderItem={Membros1}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </SafeAreaView>

                <View style={styles.containerMain2}>
                    <Text style={styles.containerTitulo3}>Conheça os parceiros do projeto boquinha</Text>
                    <Text style={styles.frase2}>Para disponibilizar um conteúdo de qualidade, contamos com um time de parceiros de ponta, que por meio de seus materiais nos ajudaram a elaborar nosso projeto seguindo as diretrizes cientificas da saúde.</Text>
                </View>
                <SafeAreaView style={{flex: 1}}>
                    <FlatList
                        data={DADOS2}
                        renderItem={Parceiros}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </SafeAreaView>
            </View>
        </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    blocos: {
        color: 'black',
        fontSize: 14,
        width: '90%',
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginVertical: 10
    },

    lista: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },

    bloco1: {
        height: height,
        alignContent: 'center',
        alignItems: 'center',
        width: '100%'
    },

    containerMain: {
        width: '75%',
        height: '19%',
        borderRadius: 25,
        padding: 35,
        backgroundColor: 'rgba(29, 162, 205, .8)',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        textAlign: 'center',
        marginTop: '30%'

    },

    containerTitulo: {
        color: 'white',
        fontSize: 24,

    },
    containerTitulo2: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center'

    },

    containerTitulo3: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center'
    },

    frase1: {
        color: 'black',
        fontSize: 18,
        width: '90%',
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginVertical: 10

    },

    frase2: {
        color: 'black',
        fontSize: 18,
        width: '90%',
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginVertical: 10

    },

    containerMain2: {
        color: 'black',
        fontSize: 14,
        width: '90%',
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10

    },

    membroBox: {
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 15
    },

    membroNome: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    },

    descricao1: {
        color: 'black',
        fontSize: 18,
        padding: 5
    },

    descricao2: {
        color: 'black',
        fontSize: 18,
        padding: 5,
        textAlign: 'center'
    },

    membros1Imagem: {
        height: 300,
        width: '100%',
        alignSelf: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },

    btnLinkedIn: {
        alignSelf: 'center',
        width: '35%',
        height: 40,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10
    },

    btnParceiros: {
        alignSelf: 'center',
        width: '45%',
        height: 40,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10
    },

    parceirosImagem: {
        height: 200,
        width: '100%',
        alignSelf: 'center',
        resizeMode: 'contain',
    },

    parceirosBox: {
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 15
    },

    parceirosNome: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    },


})