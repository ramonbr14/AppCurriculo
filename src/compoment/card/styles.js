import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

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
    card_content: {
      marginTop: 20,
    },

    card_content_titulo:{
      fontFamily: 'Rachana',
      fontSize: 30,
      fontWeight: 'bold',
    },



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
        fontSize: 50,
        fontWeight: 'bold',
        fontFamily: 'z003',
        marginTop: 10,
        marginBottom: 20,
        
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
      card_content_text: {
        marginTop: 10,
        color: 'gold'
        
      },
})

export default styles;