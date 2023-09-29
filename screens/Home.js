import {View, Text, Image} from 'react-native';
import React, {useContext} from 'react';
import FitnessCart from '../components/FitnessCart';
import {FitnessItems} from '../Context';

const Home = () => {
  const {Workout, kcal, mins} = useContext(FitnessItems);
  return (
    <View className="flex-1">
      <View
        className="flex"
        style={{backgroundColor: '#CD853F', height: 220, width: '100%'}}>
        <Text
          className="mt-2 mx-4 text-2xl font-bold"
          style={{color: 'rgba(255,255,255,0.8)'}}>
          Home Workout
        </Text>
        <View className="flex-row items-center justify-between mx-4 mt-2">
          <View>
            <Text
              className="text-xl font-bold ml-4"
              style={{color: 'rgba(255,255,255,0.7)'}}>
              {Workout}
            </Text>
            <Text
              className="text-xl font-bold"
              style={{color: 'rgba(255,255,255,0.7)'}}>
              Workout
            </Text>
          </View>
          <View>
            <Text
              className="text-xl font-bold"
              style={{color: 'rgba(255,255,255,0.7)'}}>
              {kcal}
            </Text>
            <Text
              className="text-xl font-bold"
              style={{color: 'rgba(255,255,255,0.7)'}}>
              KCAL
            </Text>
          </View>
          <View>
            <Text
              className="text-xl font-bold ml-3"
              style={{color: 'rgba(255,255,255,0.7)'}}>
              {mins}
            </Text>
            <Text
              className="text-xl font-bold"
              style={{color: 'rgba(255,255,255,0.7)'}}>
              MINS
            </Text>
          </View>
        </View>
      </View>
      <View className="items-center justify-center -mt-24 mb-5">
        <Image
          source={{
            uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png',
          }}
          style={{height: 225, width: '90%'}}
          className="rounded-3xl"
        />
      </View>
      <View>
        <FitnessCart />
      </View>
    </View>
  );
};

export default Home;
