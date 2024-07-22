import React, {createContext, useContext, useState, ReactNode} from 'react';

interface MeditationContextType {
  selectedTime: number | null;
  setSelectedTime: (time: number | null) => void;
  start: boolean;
  setStart: (start: boolean) => void;
  showBreathingCircle: boolean;
  setShowBreathingCircle: (show: boolean) => void;
  showEndMessage: boolean;
  setShowEndMessage: (show: boolean) => void;
  breathingCycleDuration: number | null;
  setBreathingCycleDuration: (time: number | null) => void;
  cleanStates: () => void;
}

const MeditationContext = createContext({} as MeditationContextType);

export const MeditationProvider: React.FC<{children: ReactNode}> = ({
  children,
}) => {
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [start, setStart] = useState<boolean>(false);
  const [showBreathingCircle, setShowBreathingCircle] =
    useState<boolean>(false);
  const [showEndMessage, setShowEndMessage] = useState<boolean>(false);
  const [breathingCycleDuration, setBreathingCycleDuration] = useState<
    number | null
  >(null);

  const cleanStates = () => {
    setStart(false), setBreathingCycleDuration(null);
    setShowBreathingCircle(false);
    setSelectedTime(null);
    setShowEndMessage(false);
  };

  return (
    <MeditationContext.Provider
      value={{
        selectedTime,
        setSelectedTime,
        start,
        setStart,
        showBreathingCircle,
        setShowBreathingCircle,
        showEndMessage,
        setShowEndMessage,
        breathingCycleDuration,
        setBreathingCycleDuration,
        cleanStates,
      }}>
      {children}
    </MeditationContext.Provider>
  );
};

export const useMeditationContext = () => useContext(MeditationContext);
