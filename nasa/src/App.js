import React, {useState, useEffect} from 'react';
import axios from 'axios';
import moment from 'moment';
import { nasaContext } from './context/nasaContext';
import './App.css';
import NasaCard from './components/nasaCard';

function App() {
  const [nasaData, setNasaData] = useState({});
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));

  useEffect(() => {
    async function fetchData() {
        try {
            const data = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=C8iZhiozIUVg3WRcic20xpp11Z2q9TtkPfWk1aB9&date=${date}`);
            setNasaData({...nasaData, [date]: data.data});
        }
        catch(err) {
            console.log(err);
        }
    };
    console.log(date)
    if (!(date in nasaData)) {
      fetchData();
    }
  }, [date]);

  function changeDate(day) {
    let digit = day.target.value;
    setDate(digit);
  }

  return (
    <div className="App">
      <nasaContext.Provider value={nasaData}>
        <NasaCard date={date}/>
      </nasaContext.Provider>
    </div>
  );
}

export default App;
