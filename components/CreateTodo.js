import { View, Text, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Platform, TextInput } from 'react-native'
import React from 'react'

export default function CreateTodo(props) {

    const { todoContent, setTodoContent, handleAddTodo } = props;

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.createTodoBox}
            >
                <TextInput style={styles.input} placeholder="Your Todo..." value={todoContent} onChangeText={(text) => setTodoContent(text)}></TextInput>
                <TouchableOpacity onPress={handleAddTodo}>
                    <View style={styles.btn}>
                        <Text style={styles.addBtn}>Add</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    createTodoBox: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
    btn: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#ff7675',
        borderRadius: 20,
        borderColor: '#ff7675',
        borderWidth: 1,
    },
    addBtn: {
        color: '#ffffff'
    }
})