import { Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../themes/Theme";

interface BaseInputProps {
    label: string;
    asButton?: boolean;
    children?: React.ReactNode;
    onPress?: () => void;
}

export const BaseInput = ({ children, label, asButton, onPress }: BaseInputProps) => {
    return (
        <View style={styles.baseInputContainer}>
            <Text style={styles.label}>{label}</Text>

            {asButton && (
                <Pressable
                onPress={onPress}
                    style={({ pressed }) => pressed ? styles.baseInputPressed : styles.baseInput}
                >
                    {children}
                </Pressable>
            )}
            {!asButton && (
                <View style={styles.baseInput}>
                    {children}
                </View>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    baseInputContainer: {
        gap: 4,
        flexDirection: 'column',

    },
    label: {
        color: theme.colors.text,
        fontSize: theme.fonts.sizes.body,
        fontFamily: theme.fonts.family.regular
    },
    baseInput: {
        borderRadius: 8,
        backgroundColor: theme.colors.background,
    },
    baseInputPressed: {
        borderRadius: 8,
        backgroundColor: theme.colors.background,
        opacity: 0.5,
    }
})