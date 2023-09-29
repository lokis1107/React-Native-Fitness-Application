import {View, Text, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Rest = () => {
  let timer = 0;
  const [timeLeft, setTimeLeft] = useState(3);
  const navigation = useNavigation();

  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(timer);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTime();
    return () => clearTimeout(timer);
  });

  return (
    <View>
      <Image
        source={{
          uri: 'https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png',
        }}
        style={{height: 390, width: '100%'}}
      />
      <Text className="mt-10 text-center font-bold text-gray-900 text-3xl">
        TAKE A BREAK!
      </Text>
      <Text className="mt-10 text-center font-bold text-gray-900 text-3xl">{timeLeft}</Text>
    </View>
  );
};

export default Rest;
