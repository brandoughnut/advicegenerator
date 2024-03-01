import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getData } from './DataServices/DataService';
import AdviceGenerator from './components/AdviceGeneratorComponent';
import Advice from './interfaces/interface';
import dice from './images/icon-dice.svg';

function App() {

  const [advice, setAdvice] = useState<Advice>();

  const [generate, setGenerate] = useState(true);

  useEffect(() => {
    const adviceCall = async () => {
      const fetchedData = await getData();
      setAdvice(fetchedData);
    }
    adviceCall();
  }, [generate])

  const generateAdvice = () => {
    setGenerate(!generate);
  }

  return (
    <>
    <div className='BG'>
      {
      advice && <AdviceGenerator id={advice.slip.id} advice={advice.slip.advice}/>
     }
     <div className='text-center'>
      <div>
      <button className='diceBtn' onClick={generateAdvice}>
        <img src={dice} alt='dice icon'/>
      </button>
     </div>
     </div>
     
      
    </div>
    </>
  );
}

export default App;
