import { useContext } from "react";
import { PropertyContext } from "../../../GrandPa";


const Special = () => {
    const gift = useContext(PropertyContext);
    return (
        <div className="special">
            <h3>Special</h3>
            <p>Has : {gift}</p>
        </div>
    );
};

export default Special;