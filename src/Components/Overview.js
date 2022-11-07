import { useSelector } from "react-redux";
import {selectDisplay} from '../redux/slices/displayCountrySlice';

const Overview = () => {
    const currentDisplay = useSelector(selectDisplay);
    return (
        <div className="stack">
            <h1>{currentDisplay.name.official}</h1>
            <h2>'{currentDisplay.name.common}'</h2>

            <table className="overview-table">
                <tr>
                    <td>Capital:</td>
                    <td>{currentDisplay.capital}</td>
                </tr>
                <tr>
                    <td>Population:</td>
                    <td>{currentDisplay.population}</td>
                </tr>
            </table>
        </div>
    )
};
export default Overview;