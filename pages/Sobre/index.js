import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ImageBackground, Text, FlatList, TouchableOpacity} from 'react-native';
import Index1 from './../../assets/image/index/index1.jpg';
import IntegranteCosmo from './../../assets/image/sobre/integranteCosmo.jpg';
import IntegranteDiego from './../../assets/image/sobre/integranteDiego.jpg';
import IntegranteRafael from './../../assets/image/sobre/integranteRafael.jpg';
import IntegranteSamanta from './../../assets/image/sobre/integranteSamanta.jpg';
import IntegranteSara from './../../assets/image/sobre/integranteSara.jpg';
import IntegranteVinicius from './../../assets/image/sobre/integranteVinicius.jpg';
import ColaboradoresRecode from './../../assets/image/sobre/recode.png';
import ColaboradoresCren from './../../assets/image/sobre/logo_do_CREN.png';
import ColaboradoresPastoral from './../../assets/image/sobre/logo-pastoral-da-crianca.png';


const DADOS = [
    {
        nome: 'Cosmo Amaro',
        descricao: 'Estudante da Recode Pro. Entre em contato comigo clicando no botão',
        imagem: IntegranteCosmo,
    },

    {
        nome: 'Diego carmo',
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

function Membros1({item}){
    return <View style = {styles.membroBox}>
        <View style = {styles.membroBoxBG}>
            <Image source = {item.imagem} style = {styles.membros1Imagem} />
            <View style = {styles.membroBoxText}>
                <Text style = {styles.membroNome}>{item.nome}</Text>
                <Text style = {styles.descricao}>{item.descricao}</Text>
            </View>
            <TouchableOpacity>
                <Text>Linkedin</Text>
            </TouchableOpacity>
        </View>
      
    </View>
}

function Parceiros({item}){
    return <View style = {styles.parceirosBox}>
        <View style = {styles.parceirosBoxBG}>
        <Image source = {item.imagem} style = {styles.parceirosImagem} />
            <View style = {styles.parceirosBoxText}>
                <Text style = {styles.parceirosnome}>{item.nome}</Text>
                <Text style = {styles.descricao}>{item.descricao}</Text>
            </View>
            <TouchableOpacity>
                <Text>Acesse o site</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default function Sobre(props){
    return <View style={styles.container}>
         <StatusBar hidden />
         <ImageBackground source={Index1} style={styles.bloco1}>
            <View style={styles.containerMain} >
                <Text style={styles.containerTitulo} >Sobre o Projeto Boquinha</Text>
            </View>
         </ImageBackground>

        <View>
            <Text style={styles.frase1}>O projeto boquinha surgiu por meio de um dos programas da Recode, que visa gerar oportunidades e estimular a transformação social e o empoderamento digital.
            A Recode Pro possibilitou além do desenvolvimento tecnológico, um olhar crítico diante das questões sociais, as quais muitas vezes fazem parte do nosso cotidiano de forma direta.
            Acreditamos que uma boa alimentação é um dos grandes fatores para uma vida saudável, logo, o objetivo do nosso projeto é ser um site informativo e instrutivo para famílias de baixa renda que possuem crianças, fornecendo um leque de receitas nutritivas e de baixo custo que ajudam no combate a obesidade infantil.</Text>
        </View>

        <View style={styles.containerMain2}>
            <Text style={styles.containerTitulo2} >Conheça os integrantes do projeto</Text>
            <Text >Membros do Squad 6 de São Paulo, responsáveis por idealizar e desenvolver o Boquinha</Text>
        </View>

        <View style = {styles.container}>
            <FlatList
                data = {DADOS}
                renderItem = {Membros1}
            />
        </View>
        
        <View style={styles.containerMain2}>
            <Text style={styles.containerTitulo3}>Conheça os parceiros do projeto boquinha</Text>
            <Text >Para disponibilizar um conteúdo de qualidade, contamos com um time de parceiros de ponta, que por meio de seus materiais nos ajudaram a elaborar nosso projeto seguindo as diretrizes cientificas da saúde.
            </Text>
        </View>

        <View style = {styles.container}>
            <FlatList
                data = {DADOS2}
                renderItem = {Parceiros}
            />
        </View>

    </View>
}

const styles = StyleSheet.create({
    container:{
       
},

bloco1:{
   
   
},

containerMain:{
    width: '75%',
    height: '15%',
    borderRadius: 55,
    padding: 35,
    backgroundColor: '#1DA2CD',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,

},

containerTitulo:{
    color: 'white',
    fontSize: 24,

},
containerTitulo2:{
    color: 'black',
    fontSize: 20,

},
containerTitulo3:{
    color: 'black',
    fontSize: 20,

},

frase1:{
    color: 'black',
    fontSize: 14,
    width: '90%',
    borderRadius: 30,
    padding: 10,
    
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10

},

containerMain2:{
    color: 'black',
    fontSize: 14,
    width: '90%',
    borderRadius: 30,
    padding: 10,
    
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
   

},

membros1Imagem:{
    height: 300,
    width: '80%',
},

parceirosImagem:{
    height: 200,
    width: '80%',
    resizeMode: 'contain',
}

})