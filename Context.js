import React, {createContext, useState} from 'react';

const FitnessItems = createContext();

const FintnessCart = ({children}) => {
  const [completed, setCompleted] = useState([]);
  const [Workout, setWorkout] = useState(0);
  const [kcal, setKcal] = useState(0);
  const [mins, setMins] = useState(0);
  return (
    <FitnessItems.Provider
      value={{
        completed,
        setCompleted,
        Workout,
        setWorkout,
        kcal,
        setKcal,
        mins,
        setMins,
      }}>
      {children}
    </FitnessItems.Provider>
  );
};

export {FintnessCart, FitnessItems};
