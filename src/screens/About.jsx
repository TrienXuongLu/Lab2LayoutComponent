/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Button} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function About({navigation}) {
    return (
        <MainLayout>
            <View>
                <Text>Simon's Awesome To Do List App</Text>
                <Text>Create by: Trien Xuong Lu</Text>
                <Text>Version: 0.1.215241</Text>
                <Button title="Home Page" onPress={() => navigation.navigate('Home')} />
            </View>
        </MainLayout>
    );
}

export default About;