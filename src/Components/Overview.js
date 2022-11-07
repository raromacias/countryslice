import { useSelector } from "react-redux";
import {selectDisplay} from '../redux/slices/displayCountrySlice';

const Overview = () => {
    const currentDisplay = useSelector(selectDisplay);
    return (
        <div className="stack">
            <h1>{currentDisplay.name.official}</h1>
            <h2>'{currentDisplay.name.common}'</h2>

            <table className="overview-table">
                <tbody>
                <tr>
                    <th>Borders: </th>
                    <td key={currentDisplay.name.official}>
                        {currentDisplay.borders ? currentDisplay.borders.map((e,i, arr) => {
                               if(i + 1 === arr.length) {
                                return `${e}`;
                               } else {
                                return `${e}, `;
                               }
                        }) : 'N/A'}
                    </td>
                </tr>
                <tr>
                    <th>Capital:</th>
                    <td key={currentDisplay.capital}>{currentDisplay.capital}</td>
                </tr>
                <tr>
                    <th>Population:</th>
                    <td key={currentDisplay.population}>{currentDisplay.population}</td>
                </tr>
                <tr>
                    <th>Continents: </th>
                    {currentDisplay.continents.map((e) => <td key={currentDisplay.name.common}>{e}</td>)}
                </tr>
                </tbody>
            </table>
        </div>
    )
};
export default Overview;