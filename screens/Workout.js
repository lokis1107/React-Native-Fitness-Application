import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import WorkCart from '../components/WorkCart';

const Workout = props => {
  let item = props.route.params;
  const navigation = useNavigation();
  const excersises = item.excersises;
  return (
    <View className="bg-white">
      <View>
        <Image
          source={{uri: item.image}}
          style={{height: 200, width: '100%'}}
          className="absolute"
        />
        <View
          className="mx-4 mt-4 w-10 h-10 rounded-full items-center"
          style={{backgroundColor: 'rgba(255,255,255,0.2)'}}>
          <Pressable className="mt-1" onPress={() => navigation.goBack()}>
            <ArrowLeftIcon size={30} color={'white'} />
          </Pressable>
        </View>
      </View>
      <View className="mt-36">
        <WorkCart item={item} excersises={excersises}/>
      </View>
    </View>
  );
};

export default Workout;
