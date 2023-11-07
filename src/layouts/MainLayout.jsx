/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Footer from '../components/Footer';

export default function MainLayout({children}) {
    return (
        <View style={styles.container}>
            {children}
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: 20,
        },
    });