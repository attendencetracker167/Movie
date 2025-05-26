import BudgetManagement from "./BudgetManagement";
import Createproject from "./Createproject";
import './Overview.css';

const Overview = () => {
    return (
        <div className="overview-container">
            <div className="row g-4 justify-content-center">
                {/*Create project Components */}
                <div className="col-md-6">
                    <div className="glass-card">
                    <Createproject />
                </div>
                <br/>
                </div>
                  {/* Budget Management */}
                  <div className="col-md-6">
                  <div className="glass-card">
                    <BudgetManagement/>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Overview;

