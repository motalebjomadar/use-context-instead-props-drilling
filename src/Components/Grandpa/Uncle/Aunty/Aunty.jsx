import Daughter from "./Child/Daughter";
import Rasel from "./Child/Rasel";
import "./aunty.css";


const Aunty = () => {
    return (
        <div className="aunty-container">
            <h3>Aunty</h3>
            <div className="flex-aunty">
                <Daughter></Daughter>
                <Rasel></Rasel>
            </div>
        </div>
    );
};

export default Aunty;