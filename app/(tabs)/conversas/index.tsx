import { FlatList, Text, TouchableHighlight, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import conversas from '@/src/assets/data/conversas.json'
import Cores from '@/app/constantes/Cores';
import BlocoConversa from '@/src/components/BlocoConversa';
import { Link } from 'expo-router';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Separador from '@/src/components/Separador';
import { styles } from './style';


const Conversas = () => {
    const abrirLink = () => { };
    
    return (
        <ScrollView
            contentInsetAdjustmentBehavior='automatic'
            contentContainerStyle={{ paddingBottom: 40, backgroundColor: Cores.background }}
            style={{backgroundColor: Cores.background}}
        >
            {/* Menu chat */}
           <TouchableHighlight underlayColor={Cores.lightGray} >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 8,
                    paddingLeft: 20,
                    paddingBottom: 5,
                }}>
                    <View style={styles.menuChatClicado}>
                        <Link onPress={()=> Cores.red} href={'/(tabs)/conversas'} style={styles.menuChatLinkClicado}>Todas</Link>
                    </View>
                    <View style={styles.menuChat}>
                        <Link href={'/(tabs)/conversas'} style={styles.menuChatLink}>Não lidas</Link>
                    </View>
                    <View style={styles.menuChat}>
                        <Link href={'/(tabs)/conversas'} style={styles.menuChatLink}>Grupos</Link>
                    </View>
                </View>
            </TouchableHighlight>
            


            {/* mensagens arquivadas */}
            <Link href={'/(tabs)/conversas'} asChild>
                <TouchableHighlight underlayColor={Cores.lightGray} >
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 14,
                        paddingLeft: 30,
                        paddingVertical: 10,
                    }}>
                        <MaterialCommunityIcons name="archive-outline"  color={Cores.gray} size={25} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', paddingLeft: 15}}>Arquivadas</Text>
                    </View>
                </TouchableHighlight>
            </Link>

            <Separador/>
            <FlatList
                scrollEnabled={false}
                data={conversas}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <Separador/>}
                renderItem={({ item }) => <BlocoConversa {...item} />}
            />
            <Separador />
            
                <View style={{ alignItems: 'center', paddingVertical: 20 }}>
                    <Text style={styles.descricao}>
                        <Ionicons name="lock-closed" />
                        {'   Suas mensagens pessoais são protegidas com a '}
                        <Text style={styles.link} onPress={abrirLink}>criptografia de ponta a ponta.</Text>
                    </Text>
                </View>

        </ScrollView>
   )
}


export default Conversas;
