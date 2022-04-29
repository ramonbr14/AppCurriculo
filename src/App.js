import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ElsaChateada from './assets/ElsaChateada.jpg';

const App = () => {

  function handleRedeSocial(rede_social){
    switch(redes_social){
      
      case 'linkedin': 
        Alert.alert("https://www.linkedin.com/in/ramondevbr14/")
        break
      case 'github': 
        Alert.alert("https://github.com/ramonbr14")
        break
      case 'twitter': 
        Alert.alert("https://twitter.com/RainhaElsa")
        break
    }
  }

return (
      <>
      <View style={styles.page}>
        <View style={styles.cnt_cabecalho}>
          <Image source={ElsaChateada} style={styles.foto}></Image>
          <Text style={styles.nome}>ELSA DE ARENDELLE</Text>
          <Text style={styles.funcao}>Rainha de Arendelle e adjacências</Text>
          <View style={styles.redes_sociais}>
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <AntDesign name="github" size={50} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('twitter')}>
              <AntDesign name="twitter" size={50} color="blue" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <AntDesign name="linkedin-square" size={50} color="darkblue" /></TouchableOpacity>
          </View>
        </View>
        <View style={styles.card_container}> 
          <View style={styles.card}>
            <View style={styles.card_header}>
              <Text style={styles.card_conteiner_text}>EXPERIÊNCIA PROFISSIONAL</Text>
            </View>
            <View style={styles.card_content}>
              <Text style={styles.card_conteiner_text}>Experiência em ser rainha</Text>
              <Text style={styles.card_conteiner_text}>95% de aprovação popular</Text>
              <Text style={styles.card_conteiner_text}>Experiência em Magia elementar</Text>
            </View>
          </View>
        </View>

        <View style={styles.card_container}> 
          <View style={styles.card}>
            <View style={styles.card_header}>
              <Text style={styles.card_conteiner_text}>FORMAÇÃO ACADEMICA</Text>
            </View>
            <View style={styles.card_content}>
              <Text style={styles.card_conteiner_text}>Escola da Coroa de Arendelle</Text>
              <Text style={styles.card_conteiner_text}>Pontificia Universidade Catolica de Arendelle</Text>
              <Text style={styles.card_conteiner_text}>Escola Superior de Magia elementar</Text>
            </View>
          </View>
        </View>  
      </View>
      </>
      );
};

const styles = StyleSheet.create({
  
  page: {
    backgroundColor: '#a2e0db',
    flex: 1
  },
  foto: {
    width: 250,
    height:250,
    borderRadius: 125
  },
  cnt_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'z003',
    marginTop: 10,
    marginBottom: 20 
    },
    funcao: {
      fontSize: 20,
      fontWeight: 'italic',
      fontFamily: 'Dyuthi',
      marginBottom: 10,
      color: '#ff0000'
    },
    redes_sociais: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%',
      backgroundColor: 'gold',
      marginTop: 20
    },
    card_container: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center ',
      marginTop: 20
    },
    card: {
      width: '60%',
      borderRadius: 5,
      borderWidth: 2,
      borderColor: 'black',
      padding: 10, 
      backgroundColor: 'forestgreen'
    },
    
    card_content_text: {
      marginTop: 10,
      color: 'gold'
      
    }

  
});

export default App;