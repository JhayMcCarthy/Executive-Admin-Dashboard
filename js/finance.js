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
  
    
    // -----------------------------------------------------------------------
    // cashflow deviation
    // -----------------------------------------------------------------------
  
    var options = {
      series: [
        {
          name: 'Positive Cashflow',
          data: [1000, 1500, 1200, 1800, 1300, 1700, 2000, 2200, 1800, 2500, 2100, 1400], // Example positive cashflow values
        },
        {
          name: 'Negative Cashflow',
          data: [-500, -600, -700, -800, -400, -300, -900, -1000, -500, -1200, -800, -1100], // Example negative cashflow values
        },
      ],
      chart: {
        id: 'cashflow-deviation',
        type: 'area', // Keeping the area chart type
        height: 200,
        width: "100%",
        sparkline: {
          enabled: true,
        },
        group: 'sparklines',
        fontFamily: 'inherit',
        foreColor: '#adb0bb',
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0,
          inverseColors: false,
          opacityFrom: 0.2,
          opacityTo: 0.1,
          stops: [100],
        },
      },
      markers: {
        size: 0,
      },
      tooltip: {
        theme: 'dark',
        fixed: {
          enabled: true,
          position: 'right',
        },
        x: {
          show: false,
        },
        y: {
          formatter: function(val) {
            return "$" + val.toLocaleString(); // Formatting as currency for cashflow
          },
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // Monthly data
      },
      yaxis: {
        labels: {
          formatter: function(val) {
            return "$" + val.toLocaleString(); // Formatting Y-axis labels as currency
          },
        },
      },
      legend: {
        show: true,
      },
    };
    
    new ApexCharts(document.querySelector('#cashflow-deviation'), options).render();
    
    
      
  
    // -----------------------------------------------------------------------
    // Debtors
    // -----------------------------------------------------------------------
    var chart = {
      series: [
        {
          name: "Operating Profit Margin",
          data: [10, 15, 12, 18, 20, 17, 25, 30, 22, 28, 18, 35], // Example operating profit margin data in percentages
        },
      ],
      chart: {
        type: "bar", // Chart type is 'bar'
        height: 300,
        width: "100%",
        fontFamily: "inherit",
        foreColor: "#0000ff",
        toolbar: {
          show: false,
        },
        offsetX: -10,
      },
      colors: ["#008FFB"], // Customize the bar color
      plotOptions: {
        bar: {
          horizontal: false, // Vertical bars
          columnWidth: "50%", // Width of bars
          endingShape: "rounded", // Rounded bar edges
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      legend: {
        position: "top",
        itemMargin: {
          horizontal: 20,
        },
      },
      grid: {
        show: true,
        padding: {
          top: 0,
          bottom: 0,
        },
        borderColor: "rgba(0,0,0,0.05)",
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Monthly categories
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        theme: "dark",
        y: {
          formatter: function(val) {
            return val + "%"; // Format tooltip values as percentages
          },
        },
      },
      yaxis: {
        labels: {
          show: false, // Hides the y-axis labels
        },
        min: 0,
        max: 40, // Adjust the range based on expected margin values
      },
    };
    
    var chart = new ApexCharts(
      document.querySelector("#debtors-report"),
      chart
    );
    chart.render();
    
    
    
    
  
    // -----------------------------------------------------------------------
    // OPerating Profit margin
    // -----------------------------------------------------------------------
  
    var chart = {
      series: [
        {
          name: "Operating Profit Margin",
          data: [10, 15, 12, 18, 20, 17, 25, 30, 22, 28, 18, 35], // Example operating profit margin data in percentages
        },
      ],
      chart: {
        type: "bar", // Chart type is 'bar'
        height: 300,
        width: "100%",
        fontFamily: "inherit",
        foreColor: "#0000ff",
        toolbar: {
          show: false,
        },
        offsetX: -10,
      },
      colors: ["#2BE896"], // Customize the bar color
      plotOptions: {
        bar: {
          horizontal: false, // Vertical bars
          columnWidth: "50%", // Width of bars
          endingShape: "rounded", // Rounded bar edges
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      legend: {
        position: "top",
        itemMargin: {
          horizontal: 20,
        },
      },
      grid: {
        show: true,
        padding: {
          top: 0,
          bottom: 0,
        },
        borderColor: "rgba(0,0,0,0.05)",
        xaxis: {
          lines: {
            show: true,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Monthly categories
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        theme: "dark",
        y: {
          formatter: function(val) {
            return val + "%"; // Format tooltip values as percentages
          },
        },
      },
      yaxis: {
        labels: {
          show: false, // Hides the y-axis labels
        },
        min: 0,
        max: 40, // Adjust the range based on expected margin values
      },
    };
    
    var chart = new ApexCharts(
      document.querySelector("#operating-profit-margin"),
      chart
    );
    chart.render();
        
  
    // =====================================
    // Net Profit
    // =====================================
  
    // Define chart options
    var netProfitData = [5800]; // Example gross profit value in dollars

// Define the chart options for a radial bar chart
var options = {
  chart: {
    type: 'radialBar',
    height: 370,
    toolbar: { show: false },
    sparkline: {
      enabled: true
    },
    offsetX: 0,
    offsetY: 0
  },
  series: netProfitData, // Single radial value representing gross profit in dollars
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          show: true,
          fontSize: '18px',
          color: '#0CC1D8',
          offsetY: -10,
          formatter: function() {
            return "Net Profit";
          }
        },
        value: {
          show: true,
          fontSize: '16px',
          color: '#333',
          offsetY: 10,
          formatter: function(val) {
            return "Ghc" + " " + val.toLocaleString(); // Formatting as currency
          }
        }
      }
    }
  },
  colors: ['#0CC1D8'], 
  labels: ['Net Profit'], // Label for the radial bar
  tooltip: {
    enabled: true,
    formatter: function(val) {
      return "Ghc" + val.toLocaleString(); // Formatting tooltip as currency
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        height: 200
      }
    }
  }]
};

// Create the radial bar chart
var chart = new ApexCharts(document.querySelector("#net-profit"), options);
chart.render();

      
      
  
  
  
    // -----------------------------------------------------------------------
    // Gross Profit
    // -----------------------------------------------------------------------
    // Define the gross profit data
    var grossProfitData = [7512]; // Example gross profit value in dollars
var grossProfitMargin = 45; // Example gross profit margin in percentage

// Define the chart options for a radial bar chart
var options = {
  chart: {
    type: 'radialBar',
    height: 350,
    toolbar: { show: false },
    sparkline: {
      enabled: true
    },
    offsetX: 0,
    offsetY: 0
  },
  series: grossProfitData, // Single radial value representing gross profit in dollars
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          show: true,
          fontSize: '18px',
          color: '#0CD87A',
          offsetY: -10,
          formatter: function() {
            return "Gross Profit";
          }
        },
        value: {
          show: true,
          fontSize: '16px',
          color: '#333',
          offsetY: 10,
          formatter: function(val) {
            return "Ghc" + " " + val.toLocaleString(); // Formatting as currency
          }
        }
      }
    }
  },
  colors: ['#0CD87A'], // Green color for the radial bar
  labels: ['Gross Profit'], // Label for the radial bar
  tooltip: {
    enabled: true,
    formatter: function(val) {
      return "Ghc" + val.toLocaleString(); // Formatting tooltip as currency
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        height: 200
      }
    }
  }]
};

// Create the radial bar chart
var chart = new ApexCharts(document.querySelector("#gross-profit"), options);
chart.render();

// Display the gross profit margin as text
document.querySelector("#gross-margin-text").innerText = "Gross Profit Margin: " + grossProfitMargin + "%";



    

  
  
    // -----------------------------------------------------------------------
    // Opex Ratio
    // -----------------------------------------------------------------------
  
    // Opex ratio chart data
var chart_opex_ratio = {
    series: [0.5, 0.5],
    chart: {
      type: "pie",
      height: 350,
      width: 350,
    },
    labels: ["Opex", "Revenue"],
    colors: ["var(--bs-primary)", "var(--bs-secondary)"],
    stroke: {
      colors: ["#fff"],
    },
    tooltip: {
      theme: "dark",
      followCursor: true,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
    legend: {
      show: true,
      position: "bottom",
      labels: {
        colors: ["#333"],
      },
    },
  };
  
  var chart_pie_opex_ratio = new ApexCharts(
    document.querySelector("#opex-ratio"),
    chart_opex_ratio
  );
  chart_pie_opex_ratio.render();
  


    // -----------------------------------------------------------------------
    // Revenue (target vs revenue)
    // -----------------------------------------------------------------------
    // Define chart options and series data
var revenueOutput = {
    series: [
      {
        name: "Target Revenue",
        data: []
      },
      {
        name: "Actual Revenue",
        data: []
      }
    ],
    chart: {
      fontFamily: "inherit",
      type: "line",
      height: 300,
      toolbar: { show: !1 }
    },
    legend: { show: !0 },
    dataLabels: { enabled: !1 },
    stroke: {
      curve: "smooth",
      show: !0,
      width: 2,
      colors: ["var(--bs-primary)", "var(--bs-secondary)"]
    },
    xaxis: {
      categories: [],
      axisBorder: { show: !1 },
      axisTicks: { show: !1 },
      tickAmount: 6,
      labels: {
        rotate: 0,
        rotateAlways: !0,
        style: { fontSize: "10px", colors: "#adb0bb", fontWeight: "600" }
      }
    },
    yaxis: {
      show: true,
      tickAmount: 3
    },
    tooltip: {
      theme: "dark"
    },
    colors: ["var(--bs-primary)", "var(--bs-secondary)"],
    grid: {
      borderColor: "var(--bs-primary-bg-subtle)",
      strokeDashArray: 4,
      yaxis: { show: true }
    },
    markers: {
      strokeColor: ["var(--bs-primary)", "var(--bs-secondary)"],
      strokeWidth: 3
    }
  };
  
  // Define periods and corresponding revenue data
  var periods = {
    "Last 30 Days": {
      categories: [
        "1D",
        "",
        "5D",
        "",
        "10D",
        "11D",
        "15D",
        "16D",
        "20D",
        "",
        "25D",
        "",
        "28D",
        ""
      ],
      targetRevenue: [500, 500, 800, 800, 600, 600, 700, 700, 300, 300, 1000, 1000, 400, 400],
      actualRevenue: [300, 300, 600, 600, 500, 500, 600, 600, 200, 200, 900, 900, 300, 300]
    },
    "Last 90 Days": {
      categories: [
        "1D",
        "",
        "10D",
        "",
        "20D",
        "21D",
        "30D",
        "31D",
        "40D",
        "",
        "50D",
        "",
        "60D",
        "",
        "70D",
        "71D",
        "80D",
        ""
      ],
      targetRevenue: [1000, 1000, 2000, 2000, 3000, 3000, 4000, 4000, 5000, 5000, 6000, 6000, 7000, 7000, 8000, 8000, 9000, 9000],
      actualRevenue: [800, 800, 1600, 1600, 2400, 2400, 3200, 3200, 4000, 4000, 4800, 4800, 5600, 5600, 6400, 6400, 7200, 7200]
    }
  };
  
  // Initialize chart with default period
  var selectedPeriod = "Last 30 Days";
  revenueOutput.xaxis.categories = periods[selectedPeriod].categories;
  revenueOutput.series[0].data = periods[selectedPeriod].targetRevenue;
  revenueOutput.series[1].data = periods[selectedPeriod].actualRevenue;
  
  // Create chart
  var chart_revenue = new ApexCharts(
    document.querySelector("#actualrevenue-vs-targetrevenue"),
    revenueOutput
  );
  chart_revenue.render();
  
  // Define function to update chart on period change
  function updateChart(period) {
    selectedPeriod = period;
    revenueOutput.xaxis.categories = periods[selectedPeriod].categories;
    revenueOutput.series[0].data = periods[selectedPeriod].targetRevenue;
    revenueOutput.series[1].data = periods[selectedPeriod].actualRevenue;
    chart_revenue.updateSeries(revenueOutput.series);
  }
  
  // Simulate period change
  setTimeout(() => {
    updateChart("Last 90 Days");
  }, 2000);
  
    
  });
  