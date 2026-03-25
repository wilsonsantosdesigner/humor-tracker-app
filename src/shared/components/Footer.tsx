import { StyleSheet, View, Text } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { theme } from "../themes/Theme";

interface FooterProps {
    children?: React.ReactNode;
}

export const Footer = ({children}: FooterProps) => {
        const insets = useSafeAreaInsets();

    return (
        <View style={{...styles.footerContainer, paddingBottom: insets.bottom + 16}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        borderTopEndRadius: 24,
        borderTopLeftRadius: 24,
        padding: 16,
        backgroundColor: theme.colors.paper,
        ...theme.shadows.default,
    },
});