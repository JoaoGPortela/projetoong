import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#fff',
    },
    header: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 40,
      paddingHorizontal: 10,
      marginVertical: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 20,
    },
    footer: {
      marginTop: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'red'
    },
    button: {
      backgroundColor: '#2196F3',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 40,
      marginVertical: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: '#FFF',
      fontSize: 16,
    },
  });