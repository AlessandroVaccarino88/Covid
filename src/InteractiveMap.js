import {WorldMap} from "react-svg-worldmap"
import useAxios from "axios-hooks";

function InteractiveMap({onClick}){
    const [{data, loading, error}] = useAxios("https://disease.sh/v3/covid-19/countries?yesterday=false&twoDaysAgo=false&sort=cases")
    if (loading)
        return (<div>Loading</div>)
    if (error)
        return (<div>Error</div>)
    const num = data.filter(d=>d.countryInfo&&d.countryInfo.iso2).map(d => ({country: d.countryInfo.iso2, value: d.cases}))
    const stylingFunction = (context) => {
        const val =((context.countryValue - context.minValue) / (context.maxValue - context.minValue))**0.5
        const l = (1-val)*50+50
        return {
            fill: `hsl(240, 100% ${l}%)`,
            fillOpacity: 1,
            stroke: "green",
            strokeWidth: 1,
            strokeOpacity: 0.2,
            cursor: "pointer"
        }
    }
    return (
        <div className="flex" >
            <div className="Map">
                <WorldMap color="blue" title="Statistiche Covid-19" value-suffix="people" size="xl" data={num}
                          stylingFunction={stylingFunction}
                onClickFunction={(ab,b,country)=>onClick(country)}/>
            </div>
        </div>
    )
}
export default InteractiveMap;