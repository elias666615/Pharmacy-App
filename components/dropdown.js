import React, { useState } from "react";
import { View, StyleSheet, Picker } from "react-native";

export default function Product(props) {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label={props.name} value={props.name} />

            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    }
});

