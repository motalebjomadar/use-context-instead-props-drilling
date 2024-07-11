import { useContext } from "react";
import { PropertyContext } from "../../GrandPa";


const Suhana = () => {
    const gift = useContext(PropertyContext);
    return (
        <div>
            <h3>Suhana</h3>
            <p>gotted: {gift}</p>
        </div>
    );
};

export default Suhana;