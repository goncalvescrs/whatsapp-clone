import { StyleSheet } from 'react-native';
import Cores from '@/app/constantes/Cores';


export const styles = StyleSheet.create({
    menuChat: {
        backgroundColor: '#a6a6a622',
        borderRadius: 80,
        padding: 8,
        paddingHorizontal: 12,
    },
    menuChatClicado: {
        backgroundColor: '#c6f2c8',
        borderRadius: 60,
        padding: 8,
        paddingHorizontal: 12,
    },
    menuChatLink: {
        fontWeight: '600',
        color: Cores.gray
    },
    menuChatLinkClicado: {
        fontWeight: '600',
        color: '#287233',
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
    }
});