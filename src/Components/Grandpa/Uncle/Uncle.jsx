import Cousin from "./Childrens/Cousin";
import Suhana from "./Childrens/Suhana";
import "./uncle.css";


const Uncle = () => {
    return (
        <div className="uncle-container">
            <h2>Uncle</h2>
            <div className="flex-uncle">
                <Cousin></Cousin>
                <Suhana></Suhana>
            </div>
        </div>
    );
};

export default Uncle;