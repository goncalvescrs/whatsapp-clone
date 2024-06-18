import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Cores from '../constantes/Cores';

const Layout = () => {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Tabs screenOptions={{
                tabBarStyle: {
                    backgroundColor: Cores.background
                },
                tabBarActiveTintColor: '#000',
                tabBarInactiveBackgroundColor: Cores.background,
                tabBarActiveBackgroundColor: Cores.background,
                headerStyle: {
                    backgroundColor: Cores.background
                },
                headerShadowVisible: false,
            }}>
                <Tabs.Screen name='atualizacoes' options={{
                    title: 'Atualizações',
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="update" size={size} color={color}/>
                    )
                }} />
                <Tabs.Screen name='ligacoes' options={{
                    title: 'Ligações',
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="phone-outline" size={size} color={color}/>
                    )
                }} />
                <Tabs.Screen name='comunidades' options={{
                    title: 'Comunidades',
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="account-group" size={size} color={color}/>
                    )
                }} />
                <Tabs.Screen name='conversas' options={{
                    title: 'Conversas',
                    headerShown: false,
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="chatbubbles" size={size} color={color}/>
                    )
                }} />
                <Tabs.Screen name='configuracoes' options={{
                    title: 'Configurações',
                    tabBarIcon: ({ size, color }) => (
                        <Ionicons name="cog" size={size} color={color}/>
                    )
                }}/>
            </Tabs>
        </GestureHandlerRootView>
    )
}

export default Layout;