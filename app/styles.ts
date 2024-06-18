import { StyleSheet } from 'react-native';
import Cores from './constantes/Cores';

export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }, 
  bemVindo: {
    width: '100%',
    height: 300,
    marginBottom: 80
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20
  },
  descricao: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 80,
    color: Cores.gray,
    gap: 10,
    
  },
  link: {
    color: '#007f69',
  },
  button: {
    width: '100%',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#007f69',
    fontWeight: 'bold'
  },
});