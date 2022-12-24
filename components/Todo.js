import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Todo() {
    return (
        <View style={styles.todo}>
            <View style={styles.todoNumber}>
                <View style={styles.order}>
                    <Text style={styles.textColor}>#1</Text>
                </View>
                <Text>Task One</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Remove</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    todo: {
        backgroundColor: '#f7f7f7',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    todoNumber: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    order: {
        width: 25,
        height: 25,
        backgroundColor: '#ff7675',
        opacity: 0.8,
        borderRadius: 5,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textColor: {
        color: '#ffffff'
    },
    btn: {
        backgroundColor: '#ff7675',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    btnText: {
        color: '#ffffff'
    }
})