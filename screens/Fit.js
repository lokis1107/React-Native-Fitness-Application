import {View, Text, SafeAreaView, Image, Pressable} from 'react-native';
import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FitnessItems} from '../Context';

const Fit = props => {
  let item = props.route.params;
  const excersises = item.excersises;

  const [index, setIndex] = useState(0);
  const current = excersises[index];
  const navigation = useNavigation();

  const {
    completed,
    setCompleted,
    Workout,
    setWorkout,
    kcal,
    setKcal,
    mins,
    setMins,
  } = useContext(FitnessItems);

  console.log(completed);
  return (
    <View className="bg-white">
      <SafeAreaView>
        <View>
          <Image
            source={{uri: current.image}}
            style={{height: 350, width: '100%'}}
          />
          <Text className="text-center font-bold text-3xl text-gray-900 mt-24">
            {current.name}
          </Text>
          <Text className="text-center font-bold text-3xl text-gray-900 mt-5">
            x{current.sets}
          </Text>

          {index + 1 >= excersises.length ? (
            <View className="items-center justify-center">
              <Pressable
                onPress={() => {
                  navigation.navigate('Home');
                }}
                className="mt-8 bg-indigo-400 p-3 rounded-3xl w-44">
                <Text className="text-2xl font-bold  text-white text-center">
                  Done
                </Text>
              </Pressable>
            </View>
          ) : (
            <View className="items-center justify-center">
              <Pressable
                onPress={() => {
                  setCompleted([...completed, current.name]);
                  setWorkout(Workout + 1);
                  setKcal(kcal + 6);
                  setMins(mins + 2.5);
                  setTimeout(() => {
                    setIndex(index + 1);
                  }, 2000);
                  navigation.navigate('Rest');
                }}
                className="mt-8 bg-indigo-400 p-3 rounded-3xl w-44">
                <Text className="text-2xl font-bold  text-white text-center">
                  Done
                </Text>
              </Pressable>
            </View>
          )}
          <View className="flex-row items-center justify-between mx-16 mt-10 mb-96">
            {index + 1 < excersises.length ? (
              <Pressable
                onPress={() => {
                  navigation.navigate('Home');
                }}
                className="p-3 w-28 rounded-2xl bg-purple-400">
                <Text className="text-xl text-center font-bold text-white">
                  Pre
                </Text>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  navigation.navigate('Rest');
                  setTimeout(() => {
                    setIndex(index - 1);
                  }, 1000);
                }}
                className="p-3 w-28 rounded-2xl bg-purple-400">
                <Text className="text-xl text-center font-bold text-white">
                  Pre
                </Text>
              </Pressable>
            )}

            {index + 1 >= excersises.length ? (
              <Pressable
                onPress={() => navigation.navigate('Home')}
                className="p-3 w-28 rounded-2xl bg-purple-400">
                <Text className="text-xl text-center font-bold  text-white">
                  Skip
                </Text>
              </Pressable>
            ) : (
              <Pressable
                onPress={() => {
                  setTimeout(() => {
                    navigation.navigate('Rest');
                    setIndex(index + 1);
                  }, 500);
                }}
                className="p-3 w-28 rounded-2xl bg-purple-400">
                <Text className="text-xl text-center font-bold  text-white">
                  Skip
                </Text>
              </Pressable>
            )}
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Fit;
