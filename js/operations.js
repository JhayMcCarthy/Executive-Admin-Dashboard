document.addEventListener("DOMContentLoaded", function () {

    //=====================================
    // Theme Onload Toast
    //=====================================
    window.addEventListener("load", () => {
      let myAlert = document.querySelectorAll('.toast')[0];
      if (myAlert) {
        let bsAlert = new bootstrap.Toast(myAlert);
        bsAlert.show();
      }
    })

    //=====================================
    //NPS chart
    //=====================================
    var options = {
        chart: {
          type: 'line', // Line chart to show NPS trends
          height: 400,
        },
        series: [{
          name: 'NPS',
          data: [45, 60, 30, -50, 70, 75, 84, -69, -47, 97, 35, -67] // Example NPS values over months
        }],
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          title: {
            text: 'Months'
          }
        },
        yaxis: {
          title: {
            text: 'Net Promoter Score'
          },
          min: -100, // NPS scale range
          max: 100
        },
        colors: ['#4bc0c0'],
        stroke: {
          curve: 'smooth',
          width: 5,
        },
        markers: {
          size: 4,
          colors: ['#4bc0c0'],
          strokeColors: '#fff',
          strokeWidth: 2,
        },
        tooltip: {
          enabled: true,
          y: {
            formatter: function(val) {
              return val + " NPS";
            }
          }
        }
      };
      
      var npsChart = new ApexCharts(document.querySelector("#npsChart"), options);
      npsChart.render();

    //=====================================
    //Company Efficiency
    //=====================================
   // Chart options for a radial bar (gauge) chart
var options = {
  chart: {
    type: 'radialBar',
    height: '150%',
    animations: {
      enabled: true,
      easing: 'easeinout',
      dynamicAnimation: {
        speed: 350
      }
    }
  },
  series: [75], // Example efficiency score (75%)
  labels: ['Efficiency'],
  colors: ['#4bc0c0'],
  plotOptions: {
    radialBar: {
      hollow: {
        size: '60%',
      },
      dataLabels: {
        name: {
          fontSize: '20px',
        },
        value: {
          fontSize: '20px',
          color: '#333',
          formatter: function(val) {
            return val + "%";
          }
        }
      },
      track: {
        background: '#eee'
      }
    }
  },
  fill: {
    gradients: [{
      gradientToColors: ['#afeeff']
    }]
  },
  responsive: [{
    breakpoint: 768, // Mobile breakpoint
    options: {
      chart: {
        height: 250 // Adjust height for smaller screens
      }
    }
  }]
};

var efficiencyScoreChart = new ApexCharts(document.querySelector("#efficiencyScoreChart"), options);
efficiencyScoreChart.render();

// Automatically resize chart on window resize
window.addEventListener('resize', function() {
  efficiencyScoreChart.updateOptions({
    chart: {
      height: '100%',
      width: '100%'
    }
  });
});



})