import { Slot } from "expo-router";
import { View, StyleSheet } from "react-native";
import { TaskBar } from "@/components";

export default function Layout() {
    return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Slot />
                </View>
                <TaskBar />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
});
