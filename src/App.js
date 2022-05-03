import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import ElsaChateada from './assets/ElsaChateada.jpg';
import Card from './compoment/card';
import styles from './compoment/card/styles';

const App = () => {

  function handleRedeSocial(rede_social){
    switch(redes_social){
      
      case 'linkedin': 
        Alert.alert('https://www.linkedin.com/in/ramondevbr14/')
        break
      case 'github': 
        Alert.alert('https://github.com/ramonbr14')
        break
      case 'twitter': 
        Alert.alert('https://twitter.com/RainhaElsa')
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
              <AntDesign name="linkedin-square" size={50} color="darkblue" />
            </TouchableOpacity>
          </View>
        </View>

        <Card titulo="Formação Academica">
          <Text style={styles.card_conteiner_text}>Escola da Coroa de Arendelle</Text>
          <Text style={styles.card_conteiner_text}>Pontificia Universidade Catolica de Arendelle</Text>
          <Text style={styles.card_conteiner_text}>Escola Superior de Magia elementar</Text>
        </Card>
        <Card titulo="Experiencia Profissional">
          <Text style={styles.card_conteiner_text}>Experiência em ser rainha</Text>
          <Text style={styles.card_conteiner_text}>95% de aprovação popular</Text>
          <Text style={styles.card_conteiner_text}>Experiência em Magia elementar</Text>
        </Card>
      </View>
      </>
      );
};

export default App;