import Cores from "@/app/constantes/Cores";
import { StyleSheet, View } from "react-native";

const Separador = () => (
    <View style={{
        height: StyleSheet.hairlineWidth,
        backgroundColor: Cores.lightGray,
        marginLeft: 85,
      }} />
);

export default Separador