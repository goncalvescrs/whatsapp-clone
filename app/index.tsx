import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import bemVindo from '../src/assets/images/welcome.png'
import { Link } from "expo-router";
const bemVindo_img = Image.resolveAssetSource(bemVindo).uri;

export default function HomePage() {
  const abrirLink = () => { };
  return (
    <View style={styles.container}>
      <Image source={ {uri: bemVindo_img} } style={styles.bemVindo} />
      <Text style={styles.titulo}> Bem Vindo ao WhatsApp Clone</Text>
      <Text style={styles.descricao}>
        {'Leia nossa '}
        <Text style={styles.link} onPress={abrirLink}>Politica de provacidade</Text>
          . {'Clique em "Aceitar & Continuar" para aceitar os '}
        <Text style={styles.link} onPress={abrirLink}>
          Termos de serviço.
        </Text>
      </Text>
      <Link href={"/(tabs)/conversas"} replace asChild>
        <TouchableOpacity style={styles.button} >
          <Text style={styles.buttonText} >Aceitar & Continuar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};