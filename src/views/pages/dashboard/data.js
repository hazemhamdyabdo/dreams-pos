const basicAreaChart = {
  sline: {
    chart: {
      id: "vuechart-example",
    },

chart: {
type: 'bar',
height: 300,
stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
            enabled: true
        }
},

colors: ['#28C76F', '#EA5455'],
dataLabels: {
    enabled: false
},
responsive: [{
    breakpoint: 280,
    options: {
        legend: {
        position: '',
        offsetY: 40,
        }
    }
    }],
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '20%',
            endingShape: 'rounded'
        },
        },
xaxis: {
    categories: [' Jan ', 'feb', 'march', 'april',
    'may', 'june' , 'july' , 'auguest'],
},
fill: {
    opacity: 1

},
  },
  series: [{
    name: 'Sales',
    data: [50, 45, 60, 70, 50, 45, 60, 70 ],
    }, {
    name: 'Purchase',
    data: [-21, -54, -45, -35, -21, -54, -45, -35]
    }],
};
export {
    basicAreaChart
  };
