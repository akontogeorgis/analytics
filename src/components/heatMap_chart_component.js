import DatePicker from 'react-date-picker';
import React from 'react';
import renderHeatMapChart from "./heatMap-chart"

class HeatMapChart extends React.Component {


    constructor(props) {
        super(props);
        this.heatMapChartRef = React.createRef();
    }

    componentDidMount() {
        let heatMapChart = this.heatMapChartRef.current;
        renderHeatMapChart(heatMapChart);
    }

    render() {
        return (
            <React.Fragment>
                <div className="heatMap_chart_container">

                    <div className="header_heatMap_chart">
                        <h3>Monthly Energy Heatmap</h3>
                        <div className="menu_heatMap_chart">
                            <div className="heatMap_chart_buttons_container">
                                <select className="heatMap_select" >
                                    <option selected disabled> All </option>
                                </select>
                                <DatePicker
                                    className = "heatMap_date"
                                    format={"MM-yyyy"}
                                    value={new Date(2019,1)}
                                    customStyles={{dateInput:{borderWidth: 0}}}
                                />
                            </div>
                        </div>

                    </div>
                    <hr/>

                    <div className="heatMap_chart" ref={this.heatMapChartRef}> </div>

                </div>


            </React.Fragment>

        );
    }

}

export default HeatMapChart;