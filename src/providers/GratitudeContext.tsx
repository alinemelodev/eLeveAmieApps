import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface GratitudeContextType {
  gratitudes: {[date: string]: string[]};
  setGratitudes: React.Dispatch<
    React.SetStateAction<{
      [date: string]: string[];
    }>
  >;
  addGratitude: (gratitude: string) => void;
  clearGratitudeData: () => void;
}

const GratitudeContext = createContext({} as GratitudeContextType);

export const GratitudeProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [gratitudes, setGratitudes] = useState<{[date: string]: string[]}>({});

  const addGratitude = async (gratitude: string) => {
    const today = new Date().toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    const newGratitudes = {...gratitudes};
    if (!newGratitudes[today]) newGratitudes[today] = [];
    
    newGratitudes[today].push(gratitude);

    setGratitudes(newGratitudes);

    try {
      await AsyncStorage.setItem('gratitudes', JSON.stringify(newGratitudes));
    } catch (error) {
      console.error('Failed to save gratitudes to storage:', error);
    }
  };

  const clearGratitudeData = async () => {
    try {
      await AsyncStorage.removeItem('gratitudes');
      setGratitudes({});
    } catch (error) {
      console.error('Failed to clear gratitudes from storage:', error);
    }
  };

  return (
    <GratitudeContext.Provider
      value={{
        gratitudes,
        setGratitudes,
        addGratitude,
        clearGratitudeData,
      }}>
      {children}
    </GratitudeContext.Provider>
  );
};

export const useGratitudeContext = () => useContext(GratitudeContext);
