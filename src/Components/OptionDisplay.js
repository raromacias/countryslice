import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDisplayCountry } from "../redux/slices/displayCountrySlice";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";

const OptionDisplay = () => {
    const currentPotentials = useSelector(selectPotentials);
    console.log(currentPotentials);
    const dispatch = useDispatch();
    return (
    <div className="stack">
        {currentPotentials.map((e, i) => {
        return (
        <h2 
            onClick={()=> {
                dispatch(setDisplayCountry(currentPotentials[i]));
            }}
             key={e.name.official} 
             className='country-option'
             >
                {e.name.common}
                </h2>
                );
    })}
    </div>
    );
    
};

export default OptionDisplay;
