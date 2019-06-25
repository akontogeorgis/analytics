
import React from 'react';

class Consumption extends React.Component {

    render() {
        return (
            <React.Fragment>

                <div className="consumption_container" >

                    <div className="yearly_overview">
                        <h3>Yearly Overview</h3> <hr/>
                        <p className="consumption_info">Highest consumption on 01/01/2019: <span className="consumption_value">772.48 kWh</span></p>
                        <p className="consumption_info">Lowest consumption on 01/01/2019: <span className="consumption_value">772.48 kWh</span></p>
                        <p className="consumption_info">Average monthly <span className="consumption_value">85.83kWh</span>, weekly <span className="consumption_value">85.83kWh</span> consumption</p>
                    </div>

                    <div className="monthly_overview" >
                        <h3>Monthly Overview</h3> <hr/>
                        <p className="consumption_info">Highest cumulative consumption on </p>
                        <p className="consumption_info">MTD  <span className="consumption_value">n/a</span> compared to May</p>
                    </div>

                </div>


            </React.Fragment>

        );
    }

}

export default Consumption;