import React, {createContext, useContext, useState, ReactNode} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserContextType {
  username: string | null;
  setUsername: React.Dispatch<React.SetStateAction<string | null>>;
  clearUserData: () => void;
  getGreeting: () => string;
}

const UserContext = createContext({} as UserContextType);

export const UserProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [username, setUsername] = useState<string | null>(null);

  const clearUserData = async () => {
    try {
      await AsyncStorage.removeItem('username');
      setUsername(null);
    } catch (error) {
      console.error(error);
    }
  };

  const getGreeting = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Bom dia';
    if (hours < 18) return 'Boa tarde';
    if (hours >= 18) return 'Boa tarde';
    return 'Olá';
  };

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        clearUserData,
        getGreeting,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);