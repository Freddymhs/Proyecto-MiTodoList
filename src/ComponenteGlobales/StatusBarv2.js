import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

export default function StatusBarv2() {
    return (
        <StatusBar backgroundColor='#00BCD4' barStyle="dark-content"  animated={true}   networkActivityIndicatorVisible={false} hidden />
    )
}

const styles = StyleSheet.create({})
