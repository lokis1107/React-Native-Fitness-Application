import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FitnessItems} from '../Context';
import {CheckCircleIcon} from 'react-native-heroicons/solid';

const WorkCart = ({item, excersises}) => {
  const navigation = useNavigation();

  const {completed, setCompleted} = useContext(FitnessItems);
  return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 125}}>
        <Text className="text-2xl text-gray-900 font-bold text-center mt-2">
          {item.name}
        </Text>
        <View>
          {excersises.map((item, index) => {
            return (
              <View key={index} className="p-2 mx-3 rounded-2xl">
                <Pressable>
                  <View className="flex-row items-center justify-between">
                    <Image
                      source={{uri: item.image}}
                      style={{height: 120, width: 120}}
                    />
                    <View className="mx-4">
                      <Text className="text-lg font-bold text-gray-900">
                        {item.name}
                      </Text>
                      <Text className="font-semibold text-lg">
                        X{item.sets}
                      </Text>
                    </View>
                    <View>
                      {completed.includes(item.name) ? (
                        <CheckCircleIcon size={25} color={'green'} />
                      ) : null}
                    </View>
                  </View>
                </Pressable>
              </View>
            );
          })}
        </View>
        <View className="items-center justify-center">
          <Pressable
            className="p-3 w-44 rounded-2xl bg-blue-400"
            onPress={() => {
              navigation.navigate('Fit', {...item});
              setCompleted([]);
            }}>
            <Text className="text-xl font-bold text-center text-white">
              Start
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default WorkCart;
