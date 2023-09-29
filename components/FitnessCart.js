import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import React from 'react';
import {fitness} from '../data';
import {useNavigation} from '@react-navigation/native';

const FitnessCart = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 380}}>
        {fitness.map((item, index) => {
          return (
            <View key={index} className="flex-1 p-2">
              <Pressable
                onPress={() => navigation.navigate('Workout', {...item})}>
                <Text className="absolute text-xl font-bold text-white z-10 mx-4 mt-2">
                  {item.name}
                </Text>
                <Image
                  className="mx-2 rounded-2xl"
                  source={{uri: item.image}}
                  style={{width: '95%', height: 180}}
                />
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FitnessCart;
