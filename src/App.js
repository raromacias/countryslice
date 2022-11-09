import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import LoadingModal from "./Components/LoadingModal";
import {selectPotentials} from './redux/slices/potentialCountriesSlice';
import {useSelector} from 'react-redux';
import {selectDisplay} from './redux/slices/displayCountrySlice';
import {selectLoading} from './redux/slices/isLoadingSlice';

function App() {
    const potentials = useSelector(selectPotentials)
    console.log(potentials)
    const currentDisplay = useSelector(selectDisplay);
    console.log('DISPLAY', currentDisplay);
    const isLoading = useSelector(selectLoading);
    return (
        <div className="App font-link">
            {isLoading && <LoadingModal />}
            <Header />
            {currentDisplay ? <MainDisplay /> : <OptionDisplay />}
        </div>
    );
}

export default App;
