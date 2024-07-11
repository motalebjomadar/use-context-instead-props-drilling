import { createContext } from "react";
import Dad from "./Father/Dad";
import './Grandpa.css';
import Uncle from "./Uncle/Uncle";
import Aunty from "./Uncle/Aunty/Aunty";


export const PropertyContext = createContext('ring');

 
const GrandPa = () => {
    return (
        <div className="grand">
            <h1>Grandpa</h1>
            <PropertyContext.Provider value="ring">
                        <div className="flex-grandpa">
                            <Dad></Dad>
                            <Uncle></Uncle>
                            <Aunty></Aunty>
                        </div>
            </PropertyContext.Provider>
        </div>
    );
};

export default GrandPa;