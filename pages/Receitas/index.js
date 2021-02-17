import React from 'react';
import { StyleSheet, View, ImageBackground, Dimensions, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import ReadMore from 'react-native-read-more-text';
import BG from './../../assets/image/receitas/fundoSalada.jpg';

const {height, width} = Dimensions.get('window')

const _renderTruncatedFooter = (handlePress) => {
    return (
        <Text style={{color: 'blue', marginTop: 5, textAlign: 'right'}} onPress={handlePress}>
            Saiba Mais
        </Text>
    );
}

const _renderRevealedFooter = (handlePress) => {
    return (
        <Text style={{color: 'blue', marginTop: 5, textAlign: 'right'}} onPress={handlePress}>
            Reduzir
        </Text>
    );
}
const _handleTextReady = () => {
  // ...
}
const dados6a8meses = [
    {
        cor: '#77d353',
        nome: 'Papinha de batata',
        ingredientes: ['1 Batata do tipo Monalisa com casca.', '3 Colheres de sopa de leite materno ou fórmula.'],
        preparo: 'Lave bem a batata. Coloque-a para cozinhar até que o centro fique macio. Deixe escorrer e esfriar bem antes de amassar. Adicione o leite que a criança já está acostumada a ingerir e sirva.'
    }
]
const dados8a11meses = [
    {
        nome: 'Papinha de arroz e frango',
        ingredientes: [
            '1 Batata do tipo Monalisa com casca.', 
            '3 Colheres de sopa de leite materno ou fórmula.'
        ],
        preparo: 'Lave bem a batata. Coloque-a para cozinhar até que o centro fique macio. Deixe escorrer e esfriar bem antes de amassar. Adicione o leite que a criança já está acostumada a ingerir e sirva.'
    }
]

export default class Receitas extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tabs: [
                {
                    cor: 'verde',
                    ativo: true
                }, 
                {
                    cor: 'laranja',
                    ativo: false
                }, 
                {
                    cor: 'azul',
                    ativo: false
                }, 
                {
                    cor: 'vermelho',
                    ativo: false
                }
            ]
        }
        this.Selecionado = this.Selecionado.bind(this);
    }

    Selecionado(tab){
        let tabSelecionado = tab;
        for(let i = 0; i < this.state.tabs.length; i++){
            if(this.state.tabs[i].cor === tabSelecionado){
                let lista = this.state.tabs;
                lista[i].ativo = true;
                this.setState({tabs: lista})
            }
            else{
                let lista = this.state.tabs;
                lista[i].ativo = false;
                this.setState({tabs: lista})
            }
        }
    }
    render(){
        return <ScrollView>
        <View style={styles.container}>
        <ImageBackground source={BG} style={styles.imagemCriancas}>
            <View style={styles.imagemCriancasOverlay}>
                <View style={{width: '80%'}}>
                    <Text style={styles.containerTextMainTitulo}>Receitas Maravilhosas</Text>
                    <Text style={styles.containerTextMain}>Com ingredientes saudáveis, de baixo custo e nutritivos para os pequenos, aproveitando todo seu potêncial alimentício.</Text>
                </View>
            </View>
        </ImageBackground>
        <View style={styles.containerText}>
            <Text style={styles.containerTextMainTitulo}>Vamos começar do começo</Text>
            <Text style={[styles.containerTextMain, {marginVertical: 10}]}>A recomendação atual é que a criança seja amamentada já na primeira hora de vida e por 2 anos ou mais.</Text>
            <ReadMore numberOfLines={3} renderTruncatedFooter={_renderTruncatedFooter} renderRevealedFooter={_renderRevealedFooter} onReady={_handleTextReady}>
                <Text style={styles.containerTextLeite}>Nos primeiros 6 meses, a recomendação é que ela receba somente leite materno. Quando isso ocorre, dizemos que a criança está em amamentação exclusiva. Nenhum outro alimento necessita ser dado ao bebê enquanto estiver em amamentação exclusiva: nem líquidos, como água, água de coco, chá, suco ou outros leites; nem qualquer outro alimento, como papinha e mingau.
                    Mesmo em regiões secas e quentes, não é necessário oferecer água às crianças alimentadas somente com leite materno, pois ele possui toda a água necessária para a hidratação nesse período. Em dias quentes, a criança poderá querer mamar com mais frequência para matar a sede.
                    A oferta de outros alimentos antes dos 6 meses, além de desnecessária, pode ser prejudicial, porque aumenta o risco de a criança ficar doente e pode prejudicar a absorção de nutrientes importantes existentes no leite materno, como o ferro e o zinco. Além disso, em geral a criança só está madura para receber outros alimentos em torno dos 6 meses.
                    Apesar da recomendação de amamentar até 2 anos ou mais, muitas pessoas se espantam ao ver crianças dessa idade no peito das mães por achar que são “grandes” demais para mamar. Entretanto, não há tempo máximo estabelecido para o fim da amamentação. Ela pode durar enquanto for desejada pela mulher e pela criança, desde que não haja nenhum prejuízo para ambas.
                </Text>
            </ReadMore>
            
        </View>
        <View style={styles.containerText}>
            <Text style={styles.containerTextMainTitulo}>Receitas</Text>
            <ReadMore numberOfLines={3} renderTruncatedFooter={_renderTruncatedFooter} renderRevealedFooter={_renderRevealedFooter} onReady={_handleTextReady}>
                <Text style={styles.containerTextMain}>
                    Nosso intuito ao selecionar estas receitas foi oferecer opções práticas e com ingredientes baratos,
                    mostrando que é possível alimentar a criança de forma adequada desde cedo, mas gostaríamos
                    de ressaltar que você pode se sentir livre para substituir ingredientes como desejar por algum
                    outro semelhante que tenha à disposição.
                </Text>
            </ReadMore>
            <Text style={[styles.containerTextMain, {marginVertical: 20}]}>Clique nos botões para acessar as receitas correspondentes a faixa etária desejada:</Text>
        </View>
        <View style={{width: '100%'}}>
            <View style={styles.tabMenu}>
                <TouchableOpacity name='verde' style={[styles.tabItem, this.state.tabs[0].ativo ? styles.tabVerde : styles.tabMuted]} onPress={()=> this.Selecionado("verde")}><Text style={this.state.tabs[0].ativo ? styles.tabText : styles.tabTextMuted}> 6 a 8{"\n"}meses</Text></TouchableOpacity>
                <TouchableOpacity name='laranja' style={[styles.tabItem, this.state.tabs[1].ativo? styles.tabLaranja : styles.tabMuted]} onPress={()=> this.Selecionado("laranja")}><Text style={this.state.tabs[1].ativo ? styles.tabText : styles.tabTextMuted}> 8 a 11{"\n"}meses</Text></TouchableOpacity>
                <TouchableOpacity name='azul' style={[styles.tabItem, this.state.tabs[2].ativo ? styles.tabAzul : styles.tabMuted]} onPress={()=> this.Selecionado("azul")}><Text style={this.state.tabs[2].ativo ? styles.tabText : styles.tabTextMuted}> 1 a 2{"\n"}anos</Text></TouchableOpacity>
                <TouchableOpacity name='vermelho' style={[styles.tabItem, this.state.tabs[3].ativo ? styles.tabVermelho : styles.tabMuted]} onPress={()=> this.Selecionado("vermelho")}><Text style={this.state.tabs[3].ativo ? styles.tabText : styles.tabTextMuted}> 2 a 4{"\n"}anos</Text></TouchableOpacity>
            </View>
            <View style={styles.tabContent}>

                {/* 6 a 8 meses */}
                {this.state.tabs[0].ativo ? <View style={{width: '100%', padding: 10, backgroundColor: '#77d353'}}>
                    <Text style={styles.receitaTextMainTitulo}>Alimentação transitória 6 a 8 meses.</Text>
                    <ReadMore numberOfLines={3} renderTruncatedFooter={_renderTruncatedFooter} renderRevealedFooter={_renderRevealedFooter} onReady={_handleTextReady}>
                        <Text style={styles.receitaText}>A partir dos 6 meses é possível introduzir outros alimentos, mantendo o leite materno até os dois anos ou mais de acordo com as recomendações médicas. Neste período o leite materno deixa de suprir todas as necessidades da criança, logo, a introdução adequada de alimentos complementares nesta fase da vida auxilia na prevenção de doenças como desnutrição, anemia, obesidade, pressão alta e diabetes, entre outras doenças, portanto, evite adicionar açúcar ou sal nos alimentos e os ofereça na sua condição mais natural possível.</Text>
                    </ReadMore>
                    {/* Receitas */}
                    <View style={styles.receitaBox}>
                        <Text style={styles.receitaBoxTituloVerde}>Papinha de batata</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Ingredientes:</Text>
                            <Text style={styles.receitaBoxText}>1 Batata do tipo Monalisa com casca.</Text>
                            <Text style={styles.receitaBoxText}>3 Colheres de sopa de leite materno ou fórmula.</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Modo de preparo:</Text>
                            <Text style={styles.receitaBoxText}>Lave bem a batata. Coloque-a para cozinhar até que o centro fique macio. Deixe escorrer e esfriar bem antes de amassar. Adicione o leite que a criança já está acostumada a ingerir e sirva.</Text>
                    </View>
                    <View style={styles.receitaBox}>
                        <Text style={styles.receitaBoxTituloVerde}>Papinha de ervilha e abobrinha</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Ingredientes:</Text>
                            <Text style={styles.receitaBoxText}>100g de ervilha fresca ou congelada</Text>
                            <Text style={styles.receitaBoxText}>1 abobrinha descascada cortada em cubos</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Modo de preparo:</Text>
                            <Text style={styles.receitaBoxText}>Cozinhe a abobrinha e as ervilhas no vapor até que os legumes fiquem macios. Retire, acrescente a hortelã e bata tudo no liquidificador, até obter uma consistência homogênea. Se a papinha estiver muito espessa, adicione um pouco de água do cozimento e bata novamente.</Text>
                    </View>
                    <View style={styles.receitaBox}>
                        <Text style={styles.receitaBoxTituloVerde}>Papinha completa</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Ingredientes:</Text>
                            <Text style={styles.receitaBoxText}>1 fio de óleo de canola</Text>
                            <Text style={styles.receitaBoxText}>1/4 de cebola picada em cubos</Text>
                            <Text style={styles.receitaBoxText}>150g de peito de frango, sem pele, em cubos</Text>
                            <Text style={styles.receitaBoxText}>1 xícara de espinafre lavado e picado</Text>
                            <Text style={styles.receitaBoxText}>1/2 xícara de mandioquinha lavada e descascada em cubos</Text>
                            <Text style={styles.receitaBoxText}>1/4 de xícara de ervilha (use a fresca, de preferência)</Text>
                            <Text style={styles.receitaBoxText}>Salsinha picada</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Modo de preparo:</Text>
                            <Text style={styles.receitaBoxText}>Doure a cebola e o frango no óleo de canola. Adicione os demais ingredientes e cubra com duas xícaras de água. Deixe cozinhar em panela com tampa, em fogo baixo, até que todos os ingredientes estejam macios. Retire, desfie o frango e amasse os demais itens com um garfo. Depois, é só juntar tudo.</Text>
                    </View>
                </View> : null}

                {/* 8 a 11 meses */}
                {this.state.tabs[1].ativo ? <View style={{width: '100%', padding: 10, backgroundColor: '#ff9052'}}>
                    <Text style={styles.receitaTextMainTitulo}>Alimentação transitória de 8 a 11 meses.</Text>
                    <ReadMore numberOfLines={3} renderTruncatedFooter={_renderTruncatedFooter} renderRevealedFooter={_renderRevealedFooter} onReady={_handleTextReady}>
                        <Text style={styles.receitaText}>Embora o leite de peito continue a ser muito importante para a criança, a comida começa a ter uma maior contribuição para atender as necessidades de nutrientes e energia que a criança precisa para o seu crescimento. Então, neste momento, deve-se ter muita atenção aos sinais de fome e saciedade da criança e à quantidade de comida que ela está comendo.¹ A criança já pode receber alimentos picados na mesma consistência dos alimentos da família. As carnes podem ser desfiadas. Encoraje a criança a pegar os alimentos com a mão para estimular os movimentos com as pontas dos dedos.</Text>
                    </ReadMore>
                    {/* Receitas */}
                    <View style={styles.receitaBox}>
                        <Text style={styles.receitaBoxTituloLaranja}>Papinha de arroz e frango</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Ingredientes:</Text>
                            <Text style={styles.receitaBoxText}>3 colheres de sopa de arroz bem cozido ou 2 de arroz cru</Text>
                            <Text style={styles.receitaBoxText}>½ concha de caldo de feijão</Text>
                            <Text style={styles.receitaBoxText}>2 colheres de sopa de frango desfiado e picado</Text>
                            <Text style={styles.receitaBoxText}>½ chuchu</Text>
                            <Text style={styles.receitaBoxText}>½ tomate</Text>
                            <Text style={styles.receitaBoxText}>1 colher de chá de óleo vegetal</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Modo de preparo:</Text>
                            <Text style={styles.receitaBoxText}>Cozinhar o frango, o arroz e o chuchu temperando com óleo, cebola, alho e salsinha, e deixando cozinhar até que os alimentos fiquem bem macios. Picar bem o frango e amassar o arroz, o chuchu e o tomate, sem misturar os alimentos no prato do bebê. Adicionar o caldo de feijão e servir.</Text>
                    </View>
                    <View style={styles.receitaBox}>
                        <Text style={styles.receitaBoxTituloLaranja}>Papinha de frango com ervilha</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Ingredientes:</Text>
                            <Text style={styles.receitaBoxText}>3 colheres de sopa de arroz cozido</Text>
                            <Text style={styles.receitaBoxText}>25g filé de frango desfiado</Text>
                            <Text style={styles.receitaBoxText}>1 tomate</Text>
                            <Text style={styles.receitaBoxText}>1 colher de sopa de ervilhas frescas</Text>
                            <Text style={styles.receitaBoxText}>1 colher de sopa de espinafre picado</Text>
                            <Text style={styles.receitaBoxText}>1 colher de chá de azeite</Text>
                            <Text style={styles.receitaBoxText}>Salsinha, cebola, alho e sal para temperar</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Modo de preparo:</Text>
                            <Text style={styles.receitaBoxText}>Cozinhar o frango em um pouco de água e desfiar. Em seguida, refogar a cebola e o alho no azeite, acrescentando o tomate picado, a ervilha e um pouco de água, se necessário. Acrescentar o frango, a salsinha e deixar em fogo baixo por cinco minutos. Depois, servir esse refogado com arroz e espinafres picados ao bebê.</Text>
                    </View>
                    <View style={styles.receitaBox}>
                        <Text style={styles.receitaBoxTituloLaranja}>Papinha de cenoura e carne moida</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Ingredientes:</Text>
                            <Text style={styles.receitaBoxText}>2 a 3 colheres de cenoura ralada;</Text>
                            <Text style={styles.receitaBoxText}>⅓ de xí­cara de espinafre;</Text>
                            <Text style={styles.receitaBoxText}>3 colheres de sopa de arroz;</Text>
                            <Text style={styles.receitaBoxText}>2 colheres de sopa de caldo de feijão;</Text>
                            <Text style={styles.receitaBoxText}>2 colheres de sopa de carne moída;</Text>
                            <Text style={styles.receitaBoxText}>1 colher de chá de azeite;</Text>
                            <Text style={styles.receitaBoxText}>Cebola, salsinha e coentro para temperar.</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Modo de preparo:</Text>
                            <Text style={styles.receitaBoxText}>Lave bem a batata. Coloque-a para cozinhar até que o centro fique macio. Deixe escorrer e esfriar bem antes de amassar. Adicione o leite que a criança já está acostumada a ingerir e sirva.</Text>
                    </View>
                </View> : null}

                {/* 1 a 2 anos */}
                {this.state.tabs[2].ativo ? <View style={{width: '100%', padding: 10, backgroundColor: '#00a6ff'}}>
                    <Text style={styles.receitaTextMainTitulo}>Alimentação transitória de 1 a 2 anos.</Text>
                    <ReadMore numberOfLines={3} renderTruncatedFooter={_renderTruncatedFooter} renderRevealedFooter={_renderRevealedFooter} onReady={_handleTextReady}>
                        <Text style={styles.receitaText}>No decorrer do segundo ano de vida, ela pode resistir a experimentar novos alimentos ou recusar alimentos de que gostava anteriormente. Alimentos ultraprocessados não são as melhores opções para contornar a falta de interesse, essa situação não é permanente, e a aceitação pode melhorar com a oferta repetida ou com a modificação das formas de preparo. É importante nesse período que a família estabeleça um local tranquilo para a criança se alimentar e evite distraí-la com equipamentos eletrônicos. Novos dentes surgem e a capacidade de triturar alimentos mais sólidos fica ainda mais desenvolvida.</Text>
                    </ReadMore>
                    {/* Receitas */}
                    <View style={styles.receitaBox}>
                        <Text style={styles.receitaBoxTituloAzul}>Omelete assado de arroz</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Ingredientes:</Text>
                            <Text style={styles.receitaBoxText}>1 colher (sopa) de cebola;</Text>
                            <Text style={styles.receitaBoxText}>1 dente de alho;</Text>
                            <Text style={styles.receitaBoxText}>2 colheres (sopa) de óleo;</Text>
                            <Text style={styles.receitaBoxText}>1 xícara (chá) de pimentão picado;</Text>
                            <Text style={styles.receitaBoxText}>1 xícara (chá) de cenoura em cubos;</Text>
                            <Text style={styles.receitaBoxText}>2 xícaras (chá) de talos de couve;</Text>
                            <Text style={styles.receitaBoxText}>2 xícaras (chá) de arroz cozido;</Text>
                            <Text style={styles.receitaBoxText}>1 colher (sopa) de margarina ou óleo para untar;</Text>
                            <Text style={styles.receitaBoxText}>3 ovos;</Text>
                            <Text style={styles.receitaBoxText}>1 colher (sopa) de salsa npicada;</Text>
                            <Text style={styles.receitaBoxText}>1⁄2 xícara (chá) de leite;</Text>
                            <Text style={styles.receitaBoxText}>sal e tempero a gosto.</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Modo de preparo:</Text>
                            <Text style={styles.receitaBoxText}>Doure a cebola no óleo acrescente o sal e os temperos. Junte o pimentão, a cenoura e os talos de couve picados. Acrescente o arroz cozido e despeje em um pirex untado. Bata os ovos, acrescente a salsa e o leite e despeje sobre o arroz. Leve ao forno preaquecido até que os ovos estejam cozidos.</Text>
                    </View>
                    <View style={styles.receitaBox}>
                        <Text style={styles.receitaBoxTituloAzul}>Caldo Verde</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Ingredientes:</Text>
                            <Text style={styles.receitaBoxText}>3 maços de couve;</Text>
                            <Text style={styles.receitaBoxText}>1 kg de batatas;</Text>
                            <Text style={styles.receitaBoxText}>3 colheres (sopa)de óleo;</Text>
                            <Text style={styles.receitaBoxText}>3 dentes de alho;</Text>
                            <Text style={styles.receitaBoxText}>sal a gosto.</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Modo de preparo:</Text>
                            <Text style={styles.receitaBoxText}>Cozinhe as batatas lavadas e descascadas em 2 litros de água, com um pouco de sal, até ficarem bem macias. Reserve a água. Amasse as batatas e reserve. Em uma panela aquecida o óleo e refogue o alho, e a cebola. Misture a couve cortada bem fininha, as batatas e a água reservada. Deixe cozinhar por 30 minutos.</Text>
                    </View>
                    <View style={styles.receitaBox}>
                        <Text style={styles.receitaBoxTituloAzul}>Risoto de berinjela</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Ingredientes:</Text>
                            <Text style={styles.receitaBoxText}>1 dente de alho;</Text>
                            <Text style={styles.receitaBoxText}>1 colheres (sopa) de óleo;</Text>
                            <Text style={styles.receitaBoxText}>1 colheres (sopa) de margarina;</Text>
                            <Text style={styles.receitaBoxText}>1⁄2 xícara (chá) de tomate;</Text>
                            <Text style={styles.receitaBoxText}>6 xícaras (chá) de berinjela;</Text>
                            <Text style={styles.receitaBoxText}>água o suficiente;</Text>
                            <Text style={styles.receitaBoxText}>1 xícara (chá) de arroz;</Text>
                            <Text style={styles.receitaBoxText}>sal a gosto e temperos naturais.</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Modo de preparo:</Text>
                            <Text style={styles.receitaBoxText}></Text>
                    </View>
                </View> : null}
                {/* 2 a 4 anos */}
                {this.state.tabs[3].ativo ? <View style={{width: '100%', padding: 10, backgroundColor: '#f95f62'}}>
                    <Text style={styles.receitaTextMainTitulo}>Alimentação 2 a 4 anos.</Text>
                    <ReadMore numberOfLines={3} renderTruncatedFooter={_renderTruncatedFooter} renderRevealedFooter={_renderRevealedFooter} onReady={_handleTextReady}>
                        <Text style={styles.receitaText}>A partir dos 2 anos, a criança começa a se socializar mais, comunica com mais facilidade suas preferências, aprofunda a relação afetiva com a alimentação e vivencia novas experiências. Amplia sua autonomia em relação à alimentação, recusando ou aceitando os alimentos oferecidos a ela. Por isso, cuidadoras e cuidadores precisam definir o que vão ou não negociar com a criança e quais limites serão estabelecidos. A quantidade de alimentos que a criança consegue comer ainda é pequena. Como ela precisa de diferentes nutrientes para o desenvolvimento, é importante oferecer a maior variedade de alimentos possível. A criança precisa estar com fome para aceitar as refeições em quantidades adequadas. Mesmo crianças que comiam de tudo podem começar a recusar alguns alimentos ao completarem 2 anos de idade. Os legumes e as verduras devem ser colocados no prato da criança no almoço e no jantar, mesmo que ela rejeite e diga que não vai comer. Envolver a criança na escolha da refeição da família, no planejamento da alimentação e no seu preparo é uma excelente estratégia para que ela passe a apreciar mais os alimentos.</Text>
                    </ReadMore>
                    {/* Receitas */}
                    <View style={styles.receitaBox}>
                        <Text style={styles.receitaBoxTituloVermelho}>Pão de casca de banana</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Ingredientes:</Text>
                            <Text style={styles.receitaBoxText}>6 bananas com casca;</Text>
                            <Text style={styles.receitaBoxText}>1 xícara (chá) de água;</Text>
                            <Text style={styles.receitaBoxText}>1 xícara (chá) de leite;</Text>
                            <Text style={styles.receitaBoxText}>30g de fermento fresco;</Text>
                            <Text style={styles.receitaBoxText}>1⁄2 xícara de óleo;</Text>
                            <Text style={styles.receitaBoxText}>1 ovo;</Text>
                            <Text style={styles.receitaBoxText}>1 pitada de sal;</Text>
                            <Text style={styles.receitaBoxText}>½ kg de farinha de trigo.</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Modo de preparo:</Text>
                            <Text style={styles.receitaBoxText}>Bata as cascas de bananas e a água no liquidificador. Junte o óleo, os ovos e o fermento e bata mais um pouco. Acrescente a farinha, o sal e o açúcar e misture. Por último, coloque na massa as bananas em rodelas. Coloque a massa em uma forma untada com margarina e farinha de trigo. Deixe crescer até dobrar de volume e leve para assar em forno preaquecido.</Text>
                    </View>
                    <View style={styles.receitaBox}>
                        <Text style={styles.receitaBoxTituloVermelho}>Mandioqueijo</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Ingredientes:</Text>
                            <Text style={styles.receitaBoxText}>1⁄2 kg de mandioca;</Text>
                            <Text style={styles.receitaBoxText}>1 gema;</Text>
                            <Text style={styles.receitaBoxText}>4 colheres de sopa de farinha de trigo;</Text>
                            <Text style={styles.receitaBoxText}>2 colheres de sopa de margarina;</Text>
                            <Text style={styles.receitaBoxText}>sal.</Text>
                            <Text style={styles.receitaBoxText}>Para empanar:</Text>
                            <Text style={styles.receitaBoxText}>1 clara;</Text>
                            <Text style={styles.receitaBoxText}>queijo ralado.</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Modo de preparo:</Text>
                            <Text style={styles.receitaBoxText}></Text>
                    </View>
                    <View style={styles.receitaBox}>
                        <Text style={styles.receitaBoxTituloVermelho}>Salada de frutas</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Ingredientes:</Text>
                            <Text style={styles.receitaBoxText}>1 abacaxi;</Text>
                            <Text style={styles.receitaBoxText}>1 mamão</Text>
                            <Text style={styles.receitaBoxText}>3 laranjas;</Text>
                            <Text style={styles.receitaBoxText}>4 bananas;</Text>
                            <Text style={styles.receitaBoxText}>4 colheres de sopa de açúcar.</Text>
                        <Text style={styles.receitaBoxSubTitulo}>Modo de preparo:</Text>
                            <Text style={styles.receitaBoxText}>Lave bem as frutas, descasque e pique. Em uma tigela misture todas as frutas e o açúcar, mexa bem, leve para a geladeira e depois sirva.</Text>
                    </View>
                </View> : null}
            </View>
        </View>
    </View>
        </ScrollView>
    }
}

    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafa',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagemCriancas:{
        height: height + 40,
        alignItems: 'stretch',
        width: '100%'
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
    containerTextLeite:{
        fontSize: 20,
        color: 'black',
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
    tabMenu:{
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: '100%'
    },
    tabItem:{
        width: '25%',
        height: 50,
        padding: 5,
    },
    tabText:{
        textAlign: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    tabVerde:{
        backgroundColor: '#77d353'
    },
    tabLaranja:{
        backgroundColor: '#ff9052'
    },
    tabAzul:{
        backgroundColor: '#00a6ff'
    },
    tabVermelho:{
        backgroundColor: '#f95f62'
    },
    tabMuted:{
        backgroundColor: '#f9fafa',
    },
    tabTextMuted:{
        textAlign: 'center',
        justifyContent: 'center',
        color: 'black'
    },
    receitaText:{
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },
    receitaTextMainTitulo:{
        textAlign: 'center',
        fontSize: 26,
        fontWeight: 'bold',
        color: 'white',
        padding: 5,
        marginVertical: 20
    },
    receitaBox:{
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
        alignSelf: 'center'
    },
    receitaMainBox:{
        width: '100%', 
        padding: 10
    },
    receitaBoxTituloVerde:{
        fontSize: 25,
        color: '#77d353',
        marginBottom: 10
    },
    receitaBoxTituloLaranja:{
        fontSize: 25,
        color: '#ff9052',
        marginBottom: 10
    },
    receitaBoxTituloAzul:{
        fontSize: 25,
        color: '#00a6ff',
        marginBottom: 10
    },
    receitaBoxTituloVermelho:{
        fontSize: 25,
        color: '#f95f62',
        marginBottom: 20
    },
    receitaBoxSubTitulo: {
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 10
    },
    receitaBoxText:{
        fontSize: 15
    }
})


