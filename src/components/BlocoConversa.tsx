import Cores from "@/app/constantes/Cores";
import { MaterialIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { ptBR } from 'date-fns/locale';
import { Link } from "expo-router";
import { FC } from "react";
import { Image, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";


export interface BlocoConversaProps {
    id: string;
    from:  string;
    date:  string;
    img:  string;
    msg:  string;
    read: boolean;
    unreadCount: number;
}

const BlocoConversa: FC<BlocoConversaProps> = ({ id, from, date, img, msg, read, unreadCount }) => {
    const data = new Date(date);
    const dataBr = format(data, 'dd/MM/yy', { locale: ptBR });
    
    return (
        <Link href={'/(tabs)/conversas'} asChild>
            <TouchableHighlight underlayColor={Cores.lightGray} >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 14,
                        paddingLeft: 20,
                        paddingVertical: 10
                    }}>
                    <Image source={{ uri: img }} style={{width: 50, height: 50, borderRadius: 50}} />
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold'}}>{ from }</Text>
                        <Text style={{ fontSize: 16, color: Cores.gray }}>
                            {msg.length > 40 ? `${msg.substring(0, 40)}...` : msg}
                        </Text>
                    </View>
                    <Text style={{ color: Cores.gray, paddingRight: 20, alignSelf: 'flex-start' }} >
                        {dataBr}
                    </Text>
                </View>
            </TouchableHighlight>
        </Link>
    )
}

export default BlocoConversa;