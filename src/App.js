import { useEffect } from 'react';
import Card from './components/Card';
import InputItem from './components/Input'
import Button from './components/Button';
import './App.css';
import { useWeather } from './context/Weather';

function App() {
const Weather = useWeather();

useEffect(() => {
  Weather.fetchUserLocationData()
},[])

const handleRefresh = () => {
  window.location.reload(); // Reload the entire page
};


  return (
    <div className="App">
     <h1>Weather Forecast</h1>
     <InputItem />
     <Button onClick={Weather.fetchData} value="Search"/>
     <Card />
     <Button onClick={handleRefresh} value="Refresh Page"/>
    </div>
  );
}

export default App;
