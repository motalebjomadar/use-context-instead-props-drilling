import "./lover.css";
import { useContext } from "react";
import { PropertyContext } from "../../GrandPa";



const Lover = () => {
    const gift = useContext(PropertyContext);
    return (
        <div className="lover">
            <h4>Lover</h4>
            <p>{gift}</p>
        </div>
    );
};

export default Lover;