import { StyleSheet, View, Text } from "react-native"
import { theme } from "../themes/Theme"

interface IHeaderProps {
    name?: string;
}

export const Header = ({name}: IHeaderProps) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Olá,</Text>
            <Text style={styles.headerBoldText}>{!name ? 'Visitante!' : `${name}!`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        padding: 16,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: theme.fonts.sizes.title,
        fontFamily: theme.fonts.family.regular,
    },
    headerBoldText: {
        color: theme.colors.primary,
        fontSize: theme.fonts.sizes.title,
        fontFamily: theme.fonts.family.bold,
    },
});