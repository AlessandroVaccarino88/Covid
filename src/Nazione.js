import useAxios from "axios-hooks";
function Nazione({country, attribute}){
    const [{data, loading, error}] = useAxios(`https://disease.sh/v3/covid-19/countries/${country}?strict=true`)
    if (loading)
        return(<div>Loading</div>)
    if (error)
        return(<div>Error</div>)
    const d = data[attribute]
    return(
        <div>
            <h1>{d}</h1>
            <h2>{attribute}</h2>
        </div>
    )
}
export default Nazione;