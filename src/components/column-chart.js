const Highcharts = require('highcharts');

require('highcharts/modules/exporting')(Highcharts);


export default function renderColumnChart(ref) {
    Highcharts.chart(ref, {
        chart: {
            type: 'column',
        },
        title: {
            text: '',
            align: 'left',
            style:{"text-decoration":"underline"},
        },
        legend:{
          enabled:false
        },
        credits: {
            enabled: false
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Energy'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        series: [
            {
                name: "Years",
                colorByPoint: false,
                data: [
                    {
                        name: "2016",
                        y: 62.74,
                        drilldown: "2016"
                    },
                    {
                        name: "2017",
                        y: 65.74,
                        drilldown: "2017"
                    },
                    {
                        name: "2018",
                        y: 72.74,
                        drilldown: "2018"
                    },
                    {
                        name: "2019",
                        y: 58.74,
                        drilldown: "2019"
                    },

                ]
            }
        ],

    });

}