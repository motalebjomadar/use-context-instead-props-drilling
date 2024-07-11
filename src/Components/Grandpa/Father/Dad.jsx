import Myself from "./Children/Myself";
import Sister from "./Children/Sister";
import "./Father.css";

const Dad = () => {
    return (
        <div className="father-container">
            <h2>Father</h2>
            <div className="father">
                <Myself></Myself>
                <Sister></Sister>
            </div>
        </div>
    );
};

export default Dad;