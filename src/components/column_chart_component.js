import React from 'react';
import renderColumnChart from "./column-chart"
const Highcharts = require('highcharts');
require('highcharts/modules/exporting')(Highcharts);

class ColumnChart extends React.Component {


    constructor(props) {
        super(props);
        this.columnChartRef = React.createRef();
    }

    componentDidMount() {
        let columnChart = this.columnChartRef.current;
        renderColumnChart(columnChart);
    }


    render() {
        return (
            <React.Fragment>

                <div className="column_chart_container">

                    <div className="header_column_chart">
                        <h3>Consumption</h3>

                    </div>
                    <hr/>

                    <div className="column_chart" ref={this.columnChartRef}> </div>

                </div>


            </React.Fragment>

        );
    }

}

export default ColumnChart;