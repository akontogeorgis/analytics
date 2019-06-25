const Highcharts = require('highcharts');

require('highcharts/modules/exporting')(Highcharts);


export default function renderPieChart(ref) {
    Highcharts.chart(ref, {
        chart: {
            type: 'pie',
        },
        title: {
            text: '',
            align: 'left',
            style:{"text-decoration":"underline"}
        },
        credits: {
            enabled: false
        },
        navigation: {
            buttonOptions: {
                enabled: false
            }
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },


        series: [
            {
                name: "Years",
                colorByPoint: true,
                data: [
                    {
                        name: "2016",
                        y: 17.74,
                        drilldown: "2016"
                    },
                    {
                        name: "2017",
                        y: 15.74,
                        drilldown: "2017"
                    },
                    {
                        name: "2018",
                        y: 22.74,
                        drilldown: "2018"
                    },
                    {
                        name: "2019",
                        y: 32.74,
                        drilldown: "2019"
                    },
                    {
                        name: "other",
                        y: 9.74,
                        drilldown: "other"
                    },

                ]
            }
        ],

    });
}