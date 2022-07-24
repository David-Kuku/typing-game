import { useState } from 'react';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { AppContextProvider } from './context/context';
import HomeScreen from './pages/homeScreen/HomeScreen';
import TestScreen from './pages/testScreen/TestScreen';
import { TOption } from './types/types';
import { WebsiteParagraph } from './utils/mock';

const App = () => {

  const [wordList, setWordList] = useState(WebsiteParagraph)
  const [isTimeOver, setIsTimeOver] = useState(false)
  const [testDuration, setTestDuration] = useState(0)
  const [userScore, setUserScore] = useState(0)
  const [userOption, setUserOption] = useState<TOption>('')
  return (
    <div className="App">
      <AppContextProvider
        value={{
          wordList,
          setWordList,
          timeElapsed: isTimeOver,
          setTimeElapsed: setIsTimeOver,
          setTestDuration,
          testDuration,
          userScore,
          setUserScore,
          setUserOption,
          userOption
        }}>
        <Router>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/test-screen' element={<TestScreen />} />
          </Routes>
        </Router>
      </AppContextProvider>

    </div>
  );
}

export default App;
