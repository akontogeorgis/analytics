
import React from 'react';
import renderPieChart from "./pie-chart"
const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

class PieChart extends React.Component {


    constructor(props) {
        super(props);
        this.pieChartRef = React.createRef();
    }

    componentDidMount() {
        let pieChart = this.pieChartRef.current;
        renderPieChart(pieChart);
    }


    render() {
        return (
            <React.Fragment>

                <div className="pie_chart_container">

                    <div className="header_pie_chart">
                        <h3>Distribution</h3>
                        <div className="menu_pie_chart">
                            <div className="pie_chart_buttons_container">
                                <button type="button" className="menu_pie_chart_buttons">By Time First </button>
                                <button type="button" className="menu_pie_chart_buttons">By Property First </button>
                            </div>
                        </div>
                    </div>

                    <hr/>
                    <div className="pie_chart" ref={this.pieChartRef}> </div>

                </div>


            </React.Fragment>

        );
    }

}

export default PieChart;