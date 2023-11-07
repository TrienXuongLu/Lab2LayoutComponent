/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function About() {
    return (
        <MainLayout>
            <View>
                <Text>Simon's Awesome To Do List App</Text>
                <Text>Create by: Trien Xuong Lu</Text>
                <Text>Version: 0.1.215241</Text>
            </View>
        </MainLayout>
    );
}

export default About;