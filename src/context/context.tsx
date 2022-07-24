import { useContext, createContext } from 'react'
import { TWordContext } from '../types/types'


const AppContext = createContext<TWordContext>({
    wordList: '',
    setWordList: () => { },
    timeElapsed: false,
    setTimeElapsed: () => { },
    setTestDuration: () => { },
    testDuration: 0,
    userScore: 0,
    setUserScore: () => { },
    setUserOption: () => {},
    userOption: ''
})

const useAppContext =()=> useContext(AppContext)

type TProvider = {
    value: TWordContext;
    children: JSX.Element
}
const AppContextProvider = ({ value, children }: TProvider) => {
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider, useAppContext };
