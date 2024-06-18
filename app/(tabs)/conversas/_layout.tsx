import Cores from "@/app/constantes/Cores";
import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: 'Conversas',
                    headerLargeTitle: true,
                    headerTransparent: true,
                    headerBlurEffect: 'regular',
                    headerSearchBarOptions: {
                        placeholder: 'Pesquisar',
                        tintColor: '#000'
                    },
                    headerStyle: {
                        backgroundColor: Cores.background,

                    },
                    headerLeft: () => (
                        <TouchableOpacity>
                            <View style={{backgroundColor: '#a6a6a622', padding: 4 ,borderRadius: 100 }}>
                                <Ionicons name="ellipsis-horizontal" color={Cores.primary} size={20}/>
                            </View>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <View style={{flexDirection: 'row', gap: 15}}>
                            <TouchableOpacity>
                                <View style={{backgroundColor: '#a6a6a622', padding: 4 ,borderRadius: 100, marginTop: 4 }}>
                                    <Ionicons name="camera" color={Cores.primary} size={24} />
                                </View>
                            </TouchableOpacity>
                            <Link href="/" asChild>
                                <TouchableOpacity>
                                    <Ionicons name="add-circle" color={Cores.green} size={38}/>
                                </TouchableOpacity>
                            </Link>
                        </View>
                    ),
                }}    
            >
            </Stack.Screen>
        </Stack>
    )
}

export default Layout;