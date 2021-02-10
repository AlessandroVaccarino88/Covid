import './App.css';
import InteractiveMap from "./InteractiveMap";
import Grafico from "./Grafico";
import Nazione from "./Nazione";
import {useState} from "react";


function App() {
    const [country, setCountry] = useState("IT");
  return (
    <div className="App">
        <InteractiveMap onClick={setCountry}/>
        <div className="titolo"><h1>{country}</h1></div>
        <div className="flex">
            <div className="Nazione"><Nazione country={country} attribute="TodayCases"/></div>
            <div className="Nazione"><Nazione country={country} attribute="TodayDeaths"/></div>
            <div className="Nazione"><Nazione country={country} attribute="TodayRecovered"/></div>
        </div>
        <div className="flex">
            <div className="chart">
                <Grafico
                    country={country}
                />
            </div>
            <div className="chart">
                <Grafico
                    country="IR"
                />
            </div>
        </div>
    </div>

  );
}

export default App;
